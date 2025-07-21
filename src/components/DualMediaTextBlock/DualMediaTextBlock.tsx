import {
  ZARA_ORIGINS,
  HOVER_STYLE,
  WHEN_ZARA_ORIGIN_LAUCHED,
} from "../../constants";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { TextBlock } from "../";

export const DualMediaTextBlock = () => {
  useScrollReveal({
    className: "dual-media-text-block",
    options: {
      origin: "top",
      scale: 0.95,
    },
  });

  return (
    <section className="dual-media-text-block md:ml-[61px] md:mr-[97.43px] mb-[225.98px] flex flex-col md:flex-row">
      <div className="flex flex-col md:mr-[73.06px]">
        <img
          src="/images/image9.webp"
          alt={ZARA_ORIGINS}
          className={`w-full mb-[73.87px] ${HOVER_STYLE}`}
          loading="lazy"
        />
        <div className="mb-15 md:mb-0">
          <TextBlock size="MEDIUM" text={WHEN_ZARA_ORIGIN_LAUCHED} />
        </div>
      </div>
      <div className="flex">
        <img
          src="/images/image11.webp"
          alt={ZARA_ORIGINS}
          className={`w-full ${HOVER_STYLE}`}
          loading="lazy"
        />
      </div>
    </section>
  );
};
