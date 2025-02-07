import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import data from './bio.json';


import Bio from './';

const component_data = data.bio_data;
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bio',
  component: Bio,
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
} satisfies Meta<typeof Bio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: component_data 
  };