import {
  IDENTITY_BY,
  INSPIRED_BY,
  PICTURE_BY,
  ZARA_ORIGINS,
} from "../../constants";
import { TextBlock } from "../";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const MultiTextMediaBlock = () => {
  useScrollReveal({
    className: "multi-text-media-block",
    options: {
      interval: 200,
      distance: "20px",
      origin: "top",
      duration: 500,
    },
  });

  return (
    <section className="multi-text-media-block px-30 pt-25 2xl:pt-[106.03px] 2xl:pr-[225.37px] 2xl:pl-[160.96px] w-full flex flex-col md:flex-row mb-[75.59px] items-center">
      <div className="flex flex-col md:flex-row justify-between flex-1 items-center md:items-start h-full w-full">
        <div className="mb-10 md:mb-0">
          <TextBlock text={ZARA_ORIGINS} size="MEDIUM" />
        </div>
        <div className="mb-10 md:mb-0">
          <TextBlock align="RIGHT" text={IDENTITY_BY} />
        </div>
        <div className="mb-10 md:mb-0">
          <TextBlock align="RIGHT" text={INSPIRED_BY} />
        </div>
      </div>
      <div className="flex md:ml-[106.97px] flex-col ">
        <img
          src="/images/image1.webp"
          alt={ZARA_ORIGINS}
          className="w-full md:w-[400px] 2xl:w-[647.3px] mb-[15.51px] transition-transform duration-400 ease-in-out hover:scale-103"
          loading="lazy"
        />
        <TextBlock text={PICTURE_BY} align="RIGHT" />
      </div>
    </section>
  );
};
