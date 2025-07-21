import { ZARA_ORIGINS, HOVER_STYLE } from "../../../constants";
import type { GridItemProps } from "../../../types";

export const GridItem = ({ image }: GridItemProps) => {
  return (
    <img
      src={image}
      alt={ZARA_ORIGINS}
      className={`${HOVER_STYLE} w-full md:w-auto h-full`}
    />
  );
};
