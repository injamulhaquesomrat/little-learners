export type GalleryItem = {
  id: number;
  type: string;
  description: string;
  images: ImageItem[];
};

type ImageItem = {
  id: string;
  src: string;
};
