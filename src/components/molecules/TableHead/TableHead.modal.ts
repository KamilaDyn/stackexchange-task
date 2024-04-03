import { MouseEvent } from 'react';
type Order = 'asc' | 'desc';
export interface TagsItems {
  [key: string]: string | number;
}
export interface HeadCell {
  id: keyof TagsItems;
  name: string;
  isSorted: boolean;
}
export interface TableHeadModal {
  headCells: HeadCell[];
  orderBy: keyof TagsItems;
  order: Order;
  createSortHandler: (
    property: keyof TagsItems
  ) => (event: MouseEvent<unknown>) => void;
}

export interface Args {
  orderBy: string;
  headCells: HeadCell[];
  createSortHandler: () => void;
  order: Order;
}
