import type { Meta, StoryFn } from '@storybook/react';
import { TableListModal } from './TableListModal';

import TableList from './index';
const meta: Meta<typeof TableList> = {
  component: TableList,
  title: 'Components/TagsList',
  argTypes: {
    isPending: {
      variant: {
        control: { type: 'boolean' },
        default: false,
      },
    },
  },
};

const Template: StoryFn<TableListModal> = (args) => <TableList {...args} />;
export const TableBodyWithData = Template.bind({});
TableBodyWithData.args = {
  isPending: false,
  visibleRows: [
    {
      count: 17,
      name: 'zyte',
    },
    {
      count: 70,
      name: 'zypper',
    },
    {
      count: 19,
      name: 'zynq-ultrascale+',
    },
    {
      count: 2,
      name: 'zynqmp',
    },
    {
      count: 275,
      name: 'zynq',
    },
  ],
};

export const TableBodyPendingData = Template.bind({});
TableBodyPendingData.args = {
  isPending: true,
  visibleRows: [],
};

export default meta;
