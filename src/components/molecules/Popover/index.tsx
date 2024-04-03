import { useMemo } from 'react';
import {
  IconButton,
  List,
  ListItemButton,
  Popover as MuiPopover,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Sort } from '@/types/tags';
import { PopoverModal } from './Popover.modal';

export default function Popover({
  handleListItemClick,
  anchorEl,
  handleClose,
  handleOpen,
}: PopoverModal) {
  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);

  const id = open ? 'simple-popover' : undefined;
  const sortItems: Sort[] = ['popular', 'activity', 'name'];

  return (
    <>
      <IconButton onClick={handleOpen} aria-label='filter tags'>
        <FilterListIcon />
      </IconButton>
      <MuiPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <List>
          {sortItems.map((value) => (
            <ListItemButton
              key={value}
              onClick={(e) => handleListItemClick(e, value)}
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </ListItemButton>
          ))}
        </List>
      </MuiPopover>
    </>
  );
}
