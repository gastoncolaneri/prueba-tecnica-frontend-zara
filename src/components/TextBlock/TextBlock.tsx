import { ALIGN_TEXT, SIZE_TEXT } from "../../constants";
import type { TextBlockProps } from "../../types";

export const TextBlock = ({
  text,
  align = "LEFT",
  size = "SMALL",
}: TextBlockProps) => {
  const textAlign = ALIGN_TEXT[align];
  const textSize = SIZE_TEXT[size];

  return <p className={`whitespace-pre ${textAlign} ${textSize} text-center`}>{text}</p>;
};
