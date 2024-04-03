import {
  Pagination,
  TableCell,
  TableFooter as MuiTableFooter,
  TableRow,
} from '@mui/material';
import { TableFooterModal } from './TableFooter.modal';

export default function TableFooter({
  total,
  page,
  handleChangePage,
  variant,
  color,
  boundaryCount,
  siblingCount,
}: TableFooterModal) {
  return (
    <MuiTableFooter>
      <TableRow>
        <TableCell colSpan={3}>
          <Pagination
            count={total}
            page={page}
            defaultPage={page}
            boundaryCount={boundaryCount || 1}
            siblingCount={siblingCount || 2}
            onChange={handleChangePage}
            variant={variant || 'text'}
            color={color || 'standard'}
          />
        </TableCell>
      </TableRow>
    </MuiTableFooter>
  );
}
