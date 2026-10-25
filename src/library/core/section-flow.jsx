import {
  useRef,
  useMemo,
  useState,
  useEffect,
  Children,
  isValidElement,
} from "react";
import {
  motion,
  motionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useMotionValueEvent,
} from "framer-motion";
import { resolveTransition } from "./registry";

/* ───────── Segment model ───────── */

function isSectionElement(el) {
  return isValidElement(el) && el.type.__sf_section === true;
}

function buildSegments(sections) {
  const segments = [];
  let i = 0;
  while (i < sections.length) {
    const s = sections[i];
    if (s.transition && i < sections.length - 1) {
      const run = [s];
      let j = i + 1;
      while (j < sections.length) {
        const prev = run[run.length - 1];
        if (!prev.transition) break;
        run.push(sections[j]);
        if (!sections[j].transition) break;
        if (j === sections.length - 1) break;
        j++;
      }
      segments.push({ kind: "transition", sections: run });
      i += run.length;
    } else {
      segments.push({ kind: "flow", section: s });
      i++;
    }
  }
  return segments;
}

/* ───────── Pinned transition span ───────── */

function TransitionSpan({ sections, heightPerSection, restHeight }) {
  const spineRef = useRef(null);
  const viewportRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: spineRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.4,
    restDelta: 0.0001,
  });
  const velocity = useVelocity(progress);

  const edgeCount = Math.max(1, sections.length - 1);
  const viewport = useViewportSize(viewportRef);

  // Content-height measurement (tall-section support)
  const contentRefs = useRef([]);
  if (contentRefs.current.length !== sections.length) {
    const old = contentRefs.current;
    contentRefs.current = sections.map((_, i) => old[i] ?? null);
  }
  const [contentHeights, setContentHeights] = useState(() =>
    sections.map(() => 0)
  );
  useEffect(() => {
    const els = contentRefs.current;
    const measure = () => {
      setContentHeights((prev) => {
        const next = sections.map((_, i) => els[i]?.offsetHeight ?? 0);
        if (next.every((h, i) => h === prev[i])) return prev;
        return next;
      });
    };
    measure();
    const valid = els.filter(Boolean);
    if (!valid.length) return;
    const ro = new ResizeObserver(measure);
    valid.forEach((el) => ro.observe(el));
    return () => ro.disconnect();
  }, [sections.length]);

  // Per-edge timing table
  const edges = useMemo(() => {
    const vh = viewport.height || 1;

    const edgeBase = [];
    const naiveBudgets = [];
    let B = 0;
    let S = 0;

    for (let e = 0; e < edgeCount; e++) {
      const t = sections[e]?.transition;
      const rest = t?.timing?.rest ?? restHeight;
      const duration = t?.timing?.duration ?? heightPerSection;
      const postRest = t?.timing?.rest ?? restHeight;
      edgeBase.push({ rest, duration, postRest });
      B += rest + duration + postRest;

      const outOverflow = Math.max(0, (contentHeights[e] ?? 0) - vh);
      const inOverflow = Math.max(0, (contentHeights[e + 1] ?? 0) - vh);
      const naiveBefore = e === 0 && vh > 0 ? (outOverflow / vh) * 100 : 0;
      const naiveAfter = vh > 0 ? (inOverflow / vh) * 100 : 0;
      naiveBudgets.push({ before: naiveBefore, after: naiveAfter });
      S += naiveBefore + naiveAfter;
    }

    const sum = 100 + B + S;
    const discriminant = sum * sum - 400 * B;
    const T = S > 0 ? (sum + Math.sqrt(Math.max(0, discriminant))) / 2 : B;
    const factor = T > 100 ? T / (T - 100) : 1;

    const list = [];
    let cursor = 0;
    for (let e = 0; e < edgeCount; e++) {
      const { rest, duration, postRest } = edgeBase[e];
      const overflowBefore = naiveBudgets[e].before * factor;
      const overflowAfter = naiveBudgets[e].after * factor;
      const span = overflowBefore + rest + duration + postRest + overflowAfter;
      list.push({
        overflowBefore,
        rest,
        duration,
        postRest,
        overflowAfter,
        span,
        start: cursor,
      });
      cursor += span;
    }
    return { list, total: cursor };
  }, [sections, edgeCount, restHeight, heightPerSection, contentHeights, viewport.height]);

  const totalHeight = edges.total;

  // Active edge
  const [activeEdge, setActiveEdge] = useState(0);
  const [direction, setDirection] = useState("forward");
  useMotionValueEvent(progress, "change", (p) => {
    const offsetVh = p * edges.total;
    let next = 0;
    for (let e = 0; e < edges.list.length; e++) {
      if (offsetVh >= edges.list[e].start) next = e;
      else break;
    }
    next = Math.min(edgeCount - 1, Math.max(0, next));
    if (next !== activeEdge) setActiveEdge(next);
  });
  useMotionValueEvent(velocity, "change", (v) => {
    const dir = v >= 0 ? "forward" : "reverse";
    if (dir !== direction) setDirection(dir);
  });

  // Content-scroll MotionValues
  const contentYRef = useRef([]);
  if (contentYRef.current.length !== sections.length) {
    const old = contentYRef.current;
    contentYRef.current = sections.map((_, i) =>
      i < old.length ? old[i] : motionValue(0)
    );
  }

  const scrollZones = useMemo(() => {
    const vh = viewport.height || 1;
    return sections.map((_, i) => {
      const overflow_px = Math.max(0, (contentHeights[i] ?? 0) - vh);
      if (vh <= 0 || overflow_px <= 0) return null;

      if (i === 0) {
        return {
          startVh: 0,
          endVh: edges.list[0]?.overflowBefore ?? 0,
          amount_px: overflow_px,
        };
      }
      const edge = edges.list[i - 1];
      if (!edge) return null;
      const startVh =
        edge.start +
        edge.overflowBefore +
        edge.rest +
        edge.duration +
        edge.postRest;
      return {
        startVh,
        endVh: startVh + edge.overflowAfter,
        amount_px: overflow_px,
      };
    });
  }, [sections, contentHeights, viewport.height, edges]);

  // Content-scroll driver
  useEffect(() => {
    const spine = spineRef.current;
    if (!spine || !scrollZones.some((z) => z !== null)) return;
    const vh = viewport.height;
    if (vh <= 0) return;

    let cachedSpineTop = 0;
    let cachedScrollable = 0;
    const updateGeometry = () => {
      const rect = spine.getBoundingClientRect();
      cachedSpineTop = rect.top + window.scrollY;
      cachedScrollable = spine.offsetHeight - vh;
    };
    updateGeometry();
    const ro = new ResizeObserver(updateGeometry);
    ro.observe(spine);

    const lastY = new Float64Array(scrollZones.length);
    const total = edges.total;

    const handleScroll = () => {
      if (cachedScrollable <= 0) return;
      const p = Math.max(
        0,
        Math.min(1, (window.scrollY - cachedSpineTop) / cachedScrollable)
      );
      const offsetVh = p * total;

      for (let i = 0; i < scrollZones.length; i++) {
        const zone = scrollZones[i];
        const el = contentRefs.current[i];
        if (!el || !zone) continue;

        let y = 0;
        if (offsetVh <= zone.startVh) {
          y = 0;
        } else if (offsetVh >= zone.endVh) {
          y = -zone.amount_px;
        } else {
          const range = zone.endVh - zone.startVh;
          const t = range > 0 ? (offsetVh - zone.startVh) / range : 0;
          y = -zone.amount_px * t;
        }

        if (Math.abs(y - lastY[i]) < 0.5) continue;
        lastY[i] = y;
        el.style.transform = `translateY(${y}px)`;
        contentYRef.current[i]?.set(y);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      ro.disconnect();
    };
  }, [scrollZones, edges.total, viewport.height]);

  // Style bags
  const layerStylesRef = useRef(sections.map(() => ({})));
  if (layerStylesRef.current.length !== sections.length) {
    layerStylesRef.current = sections.map(() => ({}));
  }
  const prevEdgeRef = useRef(activeEdge);
  if (prevEdgeRef.current !== activeEdge) {
    for (let i = 0; i < layerStylesRef.current.length; i++) {
      const bag = layerStylesRef.current[i];
      for (const key of Object.keys(bag)) {
        delete bag[key];
      }
    }
    prevEdgeRef.current = activeEdge;
  }
  const layerStyles = layerStylesRef.current;

  const layerBounds = useMemo(
    () => sections.map(() => ({ width: 0, height: 0, top: 0, left: 0 })),
    [sections]
  );
  const layerRefs = useRef([]);
  useLayerBounds(layerRefs, layerBounds);

  const ActiveTransition = sections[activeEdge]?.transition ?? null;
  const needsCopies = ActiveTransition && ActiveTransition.copies === true;

  const activeEdgeTiming = edges.list[activeEdge] ?? {
    overflowBefore: 0,
    start: 0,
    rest: restHeight,
    duration: heightPerSection,
    postRest: restHeight,
    overflowAfter: 0,
  };
  const localProgress = useTransform(progress, (p) => {
    const offsetVh = p * edges.total;
    const animStart =
      activeEdgeTiming.start +
      activeEdgeTiming.overflowBefore +
      activeEdgeTiming.rest;
    const animLocal = (offsetVh - animStart) / activeEdgeTiming.duration;
    return animLocal < 0 ? 0 : animLocal > 1 ? 1 : animLocal;
  });

  const outgoing = {
    style: layerStyles[activeEdge],
    bounds: layerBounds[activeEdge],
    ...(needsCopies
      ? {
          render: () => (
            <motion.div style={{ y: contentYRef.current[activeEdge] }}>
              <SectionShell className={sections[activeEdge].className}>
                {sections[activeEdge].children}
              </SectionShell>
            </motion.div>
          ),
        }
      : {}),
  };
  const incoming = {
    style: layerStyles[activeEdge + 1],
    bounds: layerBounds[activeEdge + 1],
    ...(needsCopies
      ? {
          render: () => (
            <motion.div style={{ y: contentYRef.current[activeEdge + 1] }}>
              <SectionShell className={sections[activeEdge + 1].className}>
                {sections[activeEdge + 1].children}
              </SectionShell>
            </motion.div>
          ),
        }
      : {}),
  };

  return (
    <div ref={spineRef} style={{ height: `${totalHeight}vh` }} className="relative w-full">
      <div ref={viewportRef} className="sticky top-0 h-screen w-full overflow-hidden">
        {ActiveTransition && (
          <ActiveTransition
            progress={localProgress}
            direction={direction}
            viewport={viewport}
            outgoing={outgoing}
            incoming={incoming}
          />
        )}

        {sections.map((s, idx) => {
          const isOutgoing = idx === activeEdge;
          const isIncoming = idx === activeEdge + 1;
          const live = isOutgoing || isIncoming;

          const bag = layerStyles[idx];
          bag.zIndex = isIncoming ? 2 : isOutgoing ? 1 : 0;
          bag.visibility = live ? "visible" : "hidden";
          bag.pointerEvents = live ? "auto" : "none";

          return (
            <motion.div
              key={s.key}
              ref={(el) => {
                layerRefs.current[idx] = el;
              }}
              style={bag}
              aria-hidden={!live || undefined}
              className="absolute inset-0 h-full w-full"
              data-sf-layer={idx}
            >
              <div
                ref={(el) => {
                  contentRefs.current[idx] = el;
                }}
                style={{ willChange: "transform" }}
              >
                <SectionShell className={s.className}>{s.children}</SectionShell>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ───────── Flow section ───────── */

function FlowSection({ section }) {
  return (
    <section className={section.className} data-sf-flow>
      {section.children}
    </section>
  );
}

/* ───────── Public API ───────── */

export function SectionFlow({
  children,
  heightPerSection = 200,
  restHeight = 100,
  defaultTransition,
  className = "",
}) {
  const sections = useMemo(() => {
    const raw = Children.toArray(children).filter(isSectionElement);
    return raw.map((el, idx) => {
      const props = el.props;
      const resolver = props.transition ?? defaultTransition;
      const transition = resolver ? resolveTransition(resolver) : null;
      return {
        key: el.key ?? `sf-${idx}`,
        children: props.children,
        className: props.className,
        transition,
      };
    });
  }, [children, defaultTransition]);

  const segments = useMemo(() => buildSegments(sections), [sections]);

  return (
    <div className={`w-full ${className}`}>
      {segments.map((seg, idx) =>
        seg.kind === "flow" ? (
          <FlowSection key={`flow-${idx}`} section={seg.section} />
        ) : (
          <TransitionSpan
            key={`span-${idx}`}
            sections={seg.sections}
            heightPerSection={heightPerSection}
            restHeight={restHeight}
          />
        )
      )}
    </div>
  );
}

export function Section({ children, className }) {
  return <SectionShell className={className}>{children}</SectionShell>;
}
Section.__sf_section = true;

/* ───────── Helpers ───────── */

function SectionShell({ children, className }) {
  return (
    <div className={`min-h-screen w-full pointer-events-auto ${className ?? ""}`}>
      {children}
    </div>
  );
}

function useViewportSize(ref) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      setSize({ width: el.clientWidth, height: el.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);
  return size;
}

function useLayerBounds(refs, bounds) {
  useEffect(() => {
    const els = refs.current.filter(Boolean);
    if (!els.length) return;
    const update = () => {
      els.forEach((el, i) => {
        if (!el || i >= bounds.length) return;
        const r = el.getBoundingClientRect();
        bounds[i] = { width: r.width, height: r.height, top: r.top, left: r.left };
      });
    };
    update();
    const ro = new ResizeObserver(update);
    els.forEach((el) => ro.observe(el));
    return () => ro.disconnect();
  }, [refs, bounds]);
}