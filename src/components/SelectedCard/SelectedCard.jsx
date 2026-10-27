import React, { useRef, useEffect } from "react";
import { SectionFlow, Section } from "../../library/core/section-flow";
import { WaveReveal } from "../../library/transitions/wave-reveal";
import View from "./View";
import Details from "./Details";
import Charges from "./Charges";
import Benifits from "./Benifits";
import Cashback from "./Cashback";
import text_bg_video1 from "../../assets/text_bg_video1.mp4";

const SelectedCard = ({ cardName, setRoute }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId;
    let direction = 1; 
    let last = null;

    const step = (now) => {
      if (last === null) last = now;
      const dt = (now - last) / 1000;
      last = now;

      if (direction === -1) {
        const t = video.currentTime - dt;
        if (t <= 0) {
          video.currentTime = 0;
          direction = 1;
          video.play().catch(() => {});
        } else {
          video.currentTime = t;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    const onEnded = () => {
      direction = -1;
      last = null;
    };

    video.addEventListener("ended", onEnded);
    video.play().catch(() => {});
    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <div className="relative isolate min-h-screen bg-black text-white">
      <video
        ref={videoRef}
        src={text_bg_video1}
        autoPlay
        muted
        playsInline
        preload="metadata"
        className="fixed inset-0 w-full h-full object-cover -z-10 pointer-events-none"
      />
      <View cardName={cardName} setRoute={setRoute} />
      <div className="relative z-10 -mt-[100vh]">
      {/* wave edge that rides on top of Details as it slides up */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -top-[12vh] left-0 z-20 h-[12vh] w-full text-[#0e0e11]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 100"
      >
        <path
          fill="currentColor"
          d="M0 100 C 240 20 480 0 720 30 C 960 60 1200 30 1440 70 L 1440 100 Z"
        />
      </svg>

      <SectionFlow heightPerSection={100} restHeight={40}>
        <Section transition={WaveReveal}>
  <div className="relative min-h-screen overflow-hidden">
    <video
      src={text_bg_video1}
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 h-full w-full object-cover pointer-events-none"
    />
    <div className="relative z-10">
      <Details cardName={cardName} />
    </div>
  </div>
</Section>
        <Section transition={WaveReveal}>
          <Charges cardName={cardName} />
        </Section>
        <Section transition={WaveReveal}>
          <Benifits cardName={cardName} />
        </Section>
        <Section>
          <Cashback cardName={cardName} />
        </Section>
      </SectionFlow>
    </div>
    </div>
  );
};

export default SelectedCard;