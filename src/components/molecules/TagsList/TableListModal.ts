import { TagsItems } from '@/types/tags';

export interface TableListModal {
  isPending: boolean;
  visibleRows: TagsItems[];
  page: number;
  rowsPerPage: number;
}
