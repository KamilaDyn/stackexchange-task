import type { Meta, StoryObj } from '@storybook/react';
import Loader from './index';
import { LoaderModel } from './Loader.model';

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: 'Components/Loader',
  argTypes: {
    color: {
      options: [
        'inherit',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ],
      control: { type: 'select' },
    },
  },
};

type Story = StoryObj<LoaderModel>;
export const InputField: Story = {
  args: {
    color: 'primary',
    text: 'loading data',
  },
};

export default meta;
