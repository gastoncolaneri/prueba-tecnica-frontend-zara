import {
  PERMANENT_COLLECTION,
  ZARA_ORIGINS,
  VARIANT_ONE,
  VARIANT_TWO,
  VARIANT_THREE,
  WHEN_ZARA_ORIGIN_LAUCHED_FIRST_PART,
  WHEN_ZARA_ORIGIN_LAUCHED_SECOND_PART,
  ZARA_ORIGINS_IS_A_PROJECT,
  HOVER_STYLE,
} from "../../constants";

import { useScrollReveal } from "../../hooks/useScrollReveal";
import type { MediaTextBlockProps } from "../../types";
import { TextBlock } from "../";

export const MediaTextBlock = ({
  variant = VARIANT_ONE,
}: MediaTextBlockProps) => {
  useScrollReveal({
    className: "variant-one",
    options: {
      origin: "left",
    },
  });
  useScrollReveal({
    className: "variant-two",
    options: {
      origin: "left",
    },
  });
  useScrollReveal({
    className: "variant-three",
    options: {
      origin: "right",
    },
  });

  if (variant === VARIANT_ONE) {
    return (
      <section className="variant-one flex flex-col md:flex-row mb-[243.62px] ml-[18.38px] max-w-[1363.19px] w-full">
        <div className="w-full mr-[73.09px]">
          <img
            src="/images/image3.webp"
            alt={ZARA_ORIGINS}
            className={`${HOVER_STYLE} mb-20 md:mb-0 w-full md:w-auto`}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-end">
          <div className="mb-[7.57px]">
            <TextBlock size="MEDIUM" text={ZARA_ORIGINS} />
          </div>
          <div className="mb-[9.57px]">
            <TextBlock size="MEDIUM" text={PERMANENT_COLLECTION} />
          </div>
          <TextBlock size="MEDIUM" text={ZARA_ORIGINS_IS_A_PROJECT} />
        </div>
      </section>
    );
  }
  if (variant === VARIANT_TWO) {
    return (
      <section className="variant-two flex flex-col md:flex-row mb-20 md:mb-[327.68px] ml-[47.41px] max-w-[1625.88px] w-full">
        <div className="w-full md:mr-[67.84px]">
          <img
            src="/images/image19.webp"
            alt={ZARA_ORIGINS}
            className={`${HOVER_STYLE} mb-20 md:mb-0 w-full md:w-auto`}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-end">
          <div className="mb-[7.57px]">
            <TextBlock
              size="MEDIUM"
              text={WHEN_ZARA_ORIGIN_LAUCHED_FIRST_PART}
            />
          </div>
          <TextBlock
            size="MEDIUM"
            text={WHEN_ZARA_ORIGIN_LAUCHED_SECOND_PART}
          />
        </div>
      </section>
    );
  }
  if (variant === VARIANT_THREE) {
    return (
      <section className="variant-three flex flex-col md:flex-row justify-end mb-[123.47px] md:mr-[162.98px] max-w-[1335.13px] justify-self-end w-full">
        <div className="flex flex-col justify-end mb-20 md:mb-0">
          <TextBlock
            size="MEDIUM"
            text={WHEN_ZARA_ORIGIN_LAUCHED_FIRST_PART}
            align="RIGHT"
          />
        </div>
        <div className="w-full md:ml-[65.37px]">
          <img
            src="/images/image20.webp"
            alt={ZARA_ORIGINS}
            className={`${HOVER_STYLE} w-full md:w-auto`}
            loading="lazy"
          />
        </div>
      </section>
    );
  }
};
