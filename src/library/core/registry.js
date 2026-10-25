import { WaveReveal } from "../transitions/wave-reveal";

export const transitionRegistry = {
  "wave-reveal": WaveReveal,
};

export function resolveTransition(resolver) {
  if (typeof resolver === "string") {
    return transitionRegistry[resolver] ?? null;
  }
  return resolver;
}