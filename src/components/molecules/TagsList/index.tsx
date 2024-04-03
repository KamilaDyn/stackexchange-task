import { TableBody, TableCell, TableRow } from '@mui/material';
import LoadingRow from '@/components/atoms/LoadingRow';
import { numberTags } from '@/components/organisms/TagsView/numberTags';
import { TableListModal } from './TableListModal';

export default function TagsList({
  isPending,
  visibleRows,
  page,
  rowsPerPage,
}: TableListModal) {
  return (
    <TableBody>
      {isPending
        ? Array.from({ length: 5 }, (_, index) => <LoadingRow key={index} />)
        : visibleRows.map((row, index) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {numberTags(page, index, rowsPerPage).toString()}
              </TableCell>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell component='th' scope='row'>
                {row.count}
              </TableCell>
            </TableRow>
          ))}
    </TableBody>
  );
}
