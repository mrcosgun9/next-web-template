export interface IContent {
  img: string;
  title: string;
  description: string;
  link: string;
}
export interface IProduct {
  img: string;
  title: string;
  description: string;
  content: string;
  url: string;
  images: IProductImage[];
  category: IProductCategory;
}
export interface IProductCategory {
  id: number;
  title: string;
}
export interface IProductImage {
  min: string;
  max: string;
}
