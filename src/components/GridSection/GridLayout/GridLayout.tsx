import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { SHOP_THE_COLLECTION } from "../../../constants";
import type { GridLayoutProps } from "../../../types";
import { TextBlock } from "../..";
import { GridItem } from "../GridItem/GridItem";

export const GridLayout = ({ imageList }: GridLayoutProps) => {
  useEffect(() => {
    const runScrollReveal = () => {
      ScrollReveal().reveal(".grid-item", {
        interval: 200,
        distance: "20px",
        origin: "top",
        duration: 800,
        easing: "ease-out",
        delay: 100,
        cleanup: true,
        reset: false,
      });
    };

    requestAnimationFrame(() => {
      setTimeout(runScrollReveal, 100);
    });
  }, []);

  return (
    <section className="md:ml-[169.02px] max-w-[1587.96px] mx-45">
      <div className="mb-[103.86px]">
        <TextBlock text={SHOP_THE_COLLECTION} align="CENTER" size="LARGE" />
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-15 sm:gap-5 2xl:gap-[14.67px]">
        {imageList.map((image, index) => (
          <div className="grid-item" key={index}>
            <GridItem image={image} />
          </div>
        ))}
      </div>
    </section>
  );
};
