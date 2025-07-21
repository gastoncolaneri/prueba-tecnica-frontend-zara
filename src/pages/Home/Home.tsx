import {
  CarrouselContainer,
  DualMediaTextBlock,
  FullSizeImage,
  GridLayout,
  MediaTextBlock,
  MultiTextMediaBlock,
} from "../../components";
import {
  CARROUSEL_IMAGES_LIST_ONE,
  CARROUSEL_IMAGES_LIST_TWO,
  VARIANT_ONE,
  VARIANT_THREE,
  VARIANT_TWO,
  GRID_IMAGES_LIST,
} from "../../constants";

export const Home = () => {
  return (
    <>
      <MultiTextMediaBlock />
      <FullSizeImage />
      <MediaTextBlock variant={VARIANT_ONE} />
      <CarrouselContainer
        imageList={CARROUSEL_IMAGES_LIST_ONE}
        hasText={false}
      />
      <DualMediaTextBlock />
      <CarrouselContainer
        imageList={CARROUSEL_IMAGES_LIST_TWO}
        hasText={true}
      />
      <MediaTextBlock variant={VARIANT_TWO} />
      <MediaTextBlock variant={VARIANT_THREE} />
      <GridLayout imageList={GRID_IMAGES_LIST} />
    </>
  );
};
