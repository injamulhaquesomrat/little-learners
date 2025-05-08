export type galleryItem = {
  id: number;
  type: string;
  description: string;
  images: imageItem[];
};

export type imageItem = {
  id: string;
  src: string;
};
