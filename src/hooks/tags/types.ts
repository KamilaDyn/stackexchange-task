import { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { Order, Sort, TagsItems } from '@/types/tags';
interface TagsObject {
  name: string;
  count: number;
}
export interface Params {
  order: Order;
  page: number;
  tagsNumbers: number;
  sort: Sort;
}

export interface Tags {
  items: TagsObject[];
  total: number;
  page: number;
  has_more: boolean;
}
export interface UseTags {
  anchorEl: HTMLButtonElement | null;
  createSortHandler: (
    property: keyof TagsItems
  ) => (event: MouseEvent<unknown>) => void;
  data: Tags | undefined;
  getTags: (
    e: KeyboardEvent<HTMLInputElement> | KeyboardEvent<HTMLDivElement>
  ) => void;
  handleChangePage: (event: ChangeEvent<unknown>, value: number) => void;
  handleClose: () => void;
  handleListItemClick: (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    value: Sort
  ) => void;
  handleChangeRowsPerPage: (
    _:
      | React.FocusEvent<HTMLInputElement, Element>
      | React.PointerEvent<Element>
      | React.KeyboardEvent<Element>,
    value: number
  ) => void;
  handlePopoverOpen: (event: MouseEvent<HTMLButtonElement>) => void;
  isPending: boolean;
  order: Order;
  orderBy: keyof TagsItems;
  pageValue: number;
  params: Params;
  visibleRows: TagsItems[];
}
