export interface TopItem {
  img: string;
}

export interface Product {
  title: string;
  description: string;
  img: string;
}

export interface RootState {
  topList: TopItem[];
  recommandList: Product[];
  detailProduct: Product | null;
}
