import { ChangeEvent } from 'react';
export interface TableFooterModal {
  total: number;
  page: number;
  handleChangePage: (event: ChangeEvent<unknown>, value: number) => void;
  boundaryCount?: number;
  siblingCount?: number;
  variant?: 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'standard';
}
