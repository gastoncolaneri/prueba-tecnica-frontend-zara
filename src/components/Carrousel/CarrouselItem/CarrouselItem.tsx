import { ZARA_ORIGINS, HOVER_STYLE } from "../../../constants";
import type { CarrouselItemsProps } from "../../../types";
import { CarrouselCounter } from "../CarrouselCounter/CarrouselCounter";

export const CarrouselItem = ({
  image,
  position,
  totalItems,
}: CarrouselItemsProps) => {
  return (
    <div>
      <div className="mb-[20px]">
        <img
          src={image}
          alt={ZARA_ORIGINS}
          className={`max-h-[792.95px] ${HOVER_STYLE}`}
          loading="lazy"
        />
      </div>
      <CarrouselCounter position={position} totalItems={totalItems} />
    </div>
  );
};
