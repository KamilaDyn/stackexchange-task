import type { Meta, StoryObj } from '@storybook/react';

import EmptyView from './index';
import { EmptyViewModal } from './EmptyViewModal';

const meta: Meta<typeof EmptyView> = {
  component: EmptyView,
  title: 'Components/EmptyView',
  argTypes: {
    elevation: {
      control: {
        type: 'number',
        min: 1,
      },
    },
  },
};
type Story = StoryObj<EmptyViewModal>;

export const DefaultEmptyView: Story = {
  args: {
    text: 'This is view with no data',
    elevation: 2,
  },
};
export default meta;
