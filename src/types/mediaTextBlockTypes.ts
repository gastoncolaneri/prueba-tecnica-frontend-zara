import {
  VARIANT_ONE,
  VARIANT_TWO,
  VARIANT_THREE,
} from "../constants";

type Variant = typeof VARIANT_ONE | typeof VARIANT_TWO | typeof VARIANT_THREE;

export type MediaTextBlockProps = {
  variant: Variant;
};
