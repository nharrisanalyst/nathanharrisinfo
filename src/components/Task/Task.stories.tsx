import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';


import Task from './';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Task',
  component: Task,
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
} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name:'JPMC_Savings',
    data:{
        title: 'Visualizations and Web App to understand savings',
        mainText:{
            par1:"Senior Developer and Data Visualization consultant, developing this savings explorer with d3.js",
            par2: "End to end  development and consultant, from data wrangling to data visulaziton design and development to full web app."
        },
        myRole:['Advised on Design', 'Engineered D3.js Visualizations', "Engineered Full Application", "Wrangled Data"]
    }
  },
};