export interface TopItem {
  img: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  img: string;
}

export interface RootState {
  topList: TopItem[];
  recommandList: Product[];
}
