type AlignText = "RIGHT" | "LEFT" | "CENTER";
type SizeText = "SMALL" | "MEDIUM" | "LARGE";

type TextBlockProps = {
  text: string;
  size?: SizeText;
  align?: AlignText;
  marginBottom?: string;
};

export type { TextBlockProps, AlignText, SizeText };
