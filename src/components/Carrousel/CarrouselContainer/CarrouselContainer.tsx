import { Swiper, SwiperSlide } from "swiper/react";
import type { CarrouselContainerProps } from "../../../types";
import { CarrouselItem } from "../CarrouselItem/CarrouselItem";
import { TextBlock } from "../../TextBlock/TextBlock";
import {
  WHEN_ZARA_ORIGIN_LAUCHED_FIRST_PART_CARROUSEL,
  WHEN_ZARA_ORIGIN_LAUCHED_SECOND_PART_CARROUSEL,
} from "../../../constants";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

export const CarrouselContainer = ({
  imageList,
  hasText = false,
}: CarrouselContainerProps) => {
  useScrollReveal({
    className: "carrouse-container",
    options: {
      origin: "right",
    },
  });

  return (
    <section className="mb-[192.1px] carrouse-container">
      <Swiper spaceBetween={5} slidesPerView={"auto"}>
        {imageList.map((image, index) => (
          <SwiperSlide key={index}>
            <CarrouselItem
              image={image}
              position={(index + 1).toString()}
              totalItems={imageList.length.toString()}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {hasText && (
        <div className="mt-[41.92px] md:ml-[709.06px] flex-col">
          <div className="mb-[9.57px]">
            <TextBlock text={WHEN_ZARA_ORIGIN_LAUCHED_FIRST_PART_CARROUSEL} />
          </div>
          <TextBlock text={WHEN_ZARA_ORIGIN_LAUCHED_SECOND_PART_CARROUSEL} />
        </div>
      )}
    </section>
  );
};
