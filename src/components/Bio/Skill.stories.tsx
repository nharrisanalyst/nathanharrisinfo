import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';


import { Skill } from './';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Skill',
  component: Skill,
  decorators: [(Story) => (
    <div style={{ width:'1008x' }}>
      <Story />
    </div>
  ),
  withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args:{},
} satisfies Meta<typeof Skill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args:  
  {
    "skill":"Typescript"
    }
};