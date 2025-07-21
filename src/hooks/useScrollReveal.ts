import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import type { ScrollRevealProps } from "../types";

export const useScrollReveal = ({ options, className }: ScrollRevealProps) => {
  useEffect(() => {
  ScrollReveal().reveal(`.${className}`, {
      origin: "bottom",
      distance: "40px",
      duration: 1000,
      delay: 300,
      easing: "ease-out",
      reset: false,
      mobile: true,
      ...options,
    });
  }, [className, options]);
};
