import type { Meta, StoryObj } from '@storybook/react';

import TableFooter from './index';
import { TableFooterModal } from './TableFooter.modal';

const meta: Meta<typeof TableFooter> = {
  component: TableFooter,
  title: 'Components/TableFooter',
  argTypes: {
    handleChangePage: { action: 'clicked' },
    siblingCount: {
      control: {
        type: 'number',
        min: 1,
      },
    },
    boundaryCount: {
      control: {
        type: 'number',
        min: 1,
      },
    },
    variant: {
      control: {
        options: ['outlined', 'text'],
        type: 'radio',
      },
    },
  },
};
type Story = StoryObj<TableFooterModal>;

export const DefaultTagsList: Story = {
  args: {
    page: 1,
    total: 99,
    boundaryCount: 1,
    siblingCount: 2,
    variant: 'text',
    color: 'standard',
  },
};
export default meta;
