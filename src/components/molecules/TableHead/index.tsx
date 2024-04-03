import {
  Box,
  TableHead as MuiTableHead,
  TableCell,
  TableSortLabel,
  TableRow,
  tableCellClasses,
  styled,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { grey, blue } from '@mui/material/colors';
import { TableHeadModal } from './TableHead.modal';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.mode == 'light' ? blue[100] : grey[900],
    color: theme.palette.text.primary,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
export default function TableHead({
  headCells,
  orderBy,
  order,
  createSortHandler,
}: TableHeadModal) {
  return (
    <MuiTableHead>
      <TableRow>
        {headCells.map(({ name, isSorted, id }) => (
          <StyledTableCell
            key={id}
            sortDirection={orderBy === id && isSorted ? order : false}
          >
            {isSorted ? (
              <TableSortLabel
                active={orderBy === id}
                direction={orderBy === id ? order : 'asc'}
                onClick={createSortHandler(id)}
              >
                {name}
                {orderBy === id && isSorted ? (
                  <Box component='span' sx={visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              name
            )}
          </StyledTableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
}
