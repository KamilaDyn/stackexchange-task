import { MouseEvent } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { headCells } from '@/components/organisms/TagsView';
import TableHead from './index';
import { TagsItems, TableHeadModal } from './TableHead.modal';

const defaultArgs = {
  orderBy: 'name',
  headCells: headCells,
  createSortHandler: (_: keyof TagsItems) => (_: MouseEvent<unknown>) => {},
  order: 'asc',
};

export default {
  component: TableHead,
  title: 'Components/TableHead',
  argTypes: {
    orderBy: {
      options: ['name', 'count'],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta;

const Template: StoryFn<TableHeadModal> = (args) => <TableHead {...args} />;
export const TableHeadDesc = Template.bind({});
TableHeadDesc.args = {
  ...defaultArgs,
  orderBy: 'name',
  order: 'asc',
};

export const TableHeadAsc = Template.bind({});
TableHeadAsc.args = {
  ...defaultArgs,
  orderBy: 'count',
  order: 'desc',
};
