export interface DinningMap {
  id: number;
  name: string;
  tables: Array<Table>;
}

export interface Table {
  id: number;
  position: number;
  products: Array<MenuItem>;
  diners: number;
}

export interface Category {
  id: number;
  name: string;
  menuItems: Array<MenuItem>;
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  state: boolean;
  image: string;
  ingredients: Array<Ingredient>;
  discount?: number;
  creationDate: string;
  modificationDate: string;
}

export interface Ingredient {
  id: number;
  name: string;
}
