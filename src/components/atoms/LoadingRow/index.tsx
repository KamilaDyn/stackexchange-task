import { TableCell, TableRow, Box } from '@mui/material';
import { grey } from '@mui/material/colors';

const Cell = ({ width }: { width: string }) => (
  <TableCell component='th' scope='row'>
    <Box
      sx={{
        width: width,
        height: '15px',
        backgroundColor: grey[100],
      }}
    />
  </TableCell>
);

export default function LoadingRow() {
  return (
    <TableRow>
      <Cell width='20px' />
      <Cell width='200px' />
      <Cell width='100px' />
    </TableRow>
  );
}
