import type { Meta, StoryObj } from '@storybook/react';

import Popover from './index';
import { PopoverModal } from './Popover.modal';
const meta: Meta<typeof Popover> = {
  component: Popover,
  title: 'Components/Popover',
  argTypes: {
    handleListItemClick: { action: 'clicked' },
    anchorEl: { control: null },
    handleClose: { action: 'closed' },
    handleOpen: { action: 'opened' },
  },
};
type Story = StoryObj<PopoverModal>;

export const DefaultPopover: Story = {
  args: {
    anchorEl: null,
  },
};
export const OpenedPopover: Story = {
  args: {
    anchorEl: document.createElement('button'),
  },
};
export default meta;
