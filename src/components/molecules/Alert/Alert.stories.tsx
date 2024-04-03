import type { Meta, StoryFn } from '@storybook/react';
import { AppContext } from '@/context/AppContext';
import { Context } from '@/context/types';
import Alert from './index';

const mockAppContext = {
  displayAlert: {
    severity: 'error',
    text: 'This is an error message!',
  },
};

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta;

const Template: StoryFn = (args) => (
  <AppContext.Provider value={args as Context}>
    <Alert {...args} />
  </AppContext.Provider>
);
export const Error = Template.bind({});
Error.args = mockAppContext;

export const Warning = Template.bind({});
Warning.args = {
  ...mockAppContext,
  displayAlert: {
    severity: 'warning',
    text: 'This is warning alert',
  },
};
export const Info = Template.bind({});
Info.args = {
  ...mockAppContext,
  displayAlert: {
    severity: 'info',
    text: 'This is  info alert',
  },
};
export const Success = Template.bind({});
Success.args = {
  ...mockAppContext,
  displayAlert: {
    severity: 'success',
    text: 'This is your success!',
  },
};
