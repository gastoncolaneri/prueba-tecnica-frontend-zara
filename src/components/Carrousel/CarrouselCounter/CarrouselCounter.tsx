import type { CarrouselCounterProps } from "../../../types";
import { TextBlock } from "../../TextBlock/TextBlock";

export const CarrouselCounter = ({
  position,
  totalItems,
}: CarrouselCounterProps) => {
  const positionText = `0${position} / 0${totalItems}`;
  return <TextBlock text={positionText} align="RIGHT" />;
};
