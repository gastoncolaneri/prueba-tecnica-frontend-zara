type CarrouselCounterProps = {
  position: string;
  totalItems: string;
};

type CarrouselItemsProps = {
  image: string;
  position: string;
  totalItems: string;
};

type CarrouselContainerProps = {
  imageList: string[];
  hasText: boolean;
};

export type {
  CarrouselContainerProps,
  CarrouselCounterProps,
  CarrouselItemsProps,
};
