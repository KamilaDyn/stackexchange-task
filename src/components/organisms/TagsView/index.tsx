import { Box, Paper, Table as MuiTable, TableContainer } from '@mui/material';

import { useGetTags } from '@/hooks/tags/useGetTags';
import {
  EmptyView,
  Loader,
  Popover,
  TableHead,
  TableFooter,
  HeadCell,
  TagsList,
} from '@/components/molecules';
import { NumberInput } from '@/components/atoms';
import { BlueBox } from './StyledView';

export const headCells: HeadCell[] = [
  { id: 'number', name: 'Number', isSorted: false },
  { id: 'name', name: 'Tags Name', isSorted: true },
  { id: 'count', name: 'Count', isSorted: true },
];

export default function TagsView() {
  const {
    data,
    isPending,
    handleChangeRowsPerPage,
    pageValue,
    getTags,
    visibleRows,
    orderBy,
    order,
    createSortHandler,
    params,
    handleChangePage,
    handleListItemClick,
    handlePopoverOpen,
    handleClose,
    anchorEl,
  } = useGetTags();

  if (isPending) return <Loader text='loading tags data' />;

  if (!data) {
    return <EmptyView text='No tags fetched from database' />;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10,
      }}
    >
      <NumberInput
        onChange={(e, value) => handleChangeRowsPerPage(e, value as number)}
        value={pageValue}
        min={1}
        required
        onKeyDown={(e) => getTags(e)}
      />
      <Box position={'relative'}>
        <TableContainer component={Paper} sx={{ maxWidth: 500, marginTop: 5 }}>
          <BlueBox>
            <Popover
              handleListItemClick={handleListItemClick}
              anchorEl={anchorEl}
              handleClose={handleClose}
              handleOpen={handlePopoverOpen}
            />
          </BlueBox>
          <MuiTable>
            <TableHead
              headCells={headCells}
              orderBy={orderBy}
              order={order}
              createSortHandler={createSortHandler}
            />
            <TagsList
              isPending={isPending}
              visibleRows={visibleRows}
              page={params.page}
              rowsPerPage={params.tagsNumbers}
            />
            <TableFooter
              total={data?.total}
              page={params.page}
              handleChangePage={handleChangePage}
            />
          </MuiTable>
        </TableContainer>
        {isPending && <Loader text='Loading data' />}
      </Box>
    </Box>
  );
}
