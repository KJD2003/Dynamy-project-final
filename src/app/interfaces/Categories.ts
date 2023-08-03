export interface category {
  id_category: number;
  name: string;
  category: string;
  products: Array<number>;
  subcategories: Array<subcategory>;
}

export interface product {
  quantity: number;
  id_product: number;
  name: string;
  image1: string;
  image2: string;
  description: string;
  category: string;
  price: number;
  products: Array<comments>;
}
export interface comments {
  persona: string;
  commento: string;
}

export interface subcategory {
  id_subcategory: number;
  name: string;
}

export interface catalogo {
  category: string;
  product: Array<product>;
}
