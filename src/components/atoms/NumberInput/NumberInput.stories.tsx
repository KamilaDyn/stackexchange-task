import type { Meta } from '@storybook/react';

import NumberInput from './index';

const meta: Meta<typeof NumberInput> = {
  component: NumberInput,
  title: 'Components/NumberInput',
  argTypes: {
    min: {
      type: 'number',
    },
    onKeyDown: { action: 'keydown' },
    required: {
      type: 'boolean',
    },
  },
};

export const NumberType = {
  args: {
    min: 1,
  },
};
export default meta;
