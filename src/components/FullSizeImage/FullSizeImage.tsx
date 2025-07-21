import { PERMANENT_COLLECTION, ZARA_ORIGINS } from "../../constants";
import { TextBlock } from "../TextBlock/TextBlock";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const FullSizeImage = () => {
  useScrollReveal({
    className: "fullsize-image",
    options: {
      scale: 0.95,
    },
  });

  return (
    <section className="fullsize-image flex flex-1 relative mb-[143.61px] w-full">
      <img
        src="/images/image2.webp"
        alt={ZARA_ORIGINS}
        className="w-full h-full transition-opacity duration-300 hover:opacity-90"
        loading="lazy"
      />
      <div className="absolute top-[50%] right-[15%] xl:top-[888.77px] xl:right-[206.18px]">
        <div className="mb-[7.57px]">
          <TextBlock text={ZARA_ORIGINS} size="MEDIUM" />
        </div>
        <TextBlock text={PERMANENT_COLLECTION} size="MEDIUM" />
      </div>
    </section>
  );
};
