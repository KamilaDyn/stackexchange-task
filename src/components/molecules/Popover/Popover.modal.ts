import { MouseEvent } from 'react';
import { Sort } from '@/types/tags';

export interface PopoverModal {
  handleListItemClick: (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    value: Sort
  ) => void;
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
  handleOpen: (event: MouseEvent<HTMLButtonElement>) => void;
}
