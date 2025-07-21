type ScrollRevealOptions = {
  origin?: "top" | "right" | "bottom" | "left";
  distance?: string;
  duration?: number;
  delay?: number;
  scale?: number;
  interval?: number;
};

type ScrollRevealProps = {
  className: string;
  options?: ScrollRevealOptions;
};

export type { ScrollRevealOptions, ScrollRevealProps };
