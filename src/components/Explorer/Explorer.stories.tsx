import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';


import Explorer from './';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Explorer',
  component: Explorer,
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
} satisfies Meta<typeof Explorer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    cards:[
      {
          "imageSrc":"/images/work/JPMC_Savings/2.webp",
          "linkTo":"/work/JPMC_Savings",
          "name":"JPMC_Savings"
      },
      {
          "imageSrc":"/images/work/JPMC_Savings/2.webp",
          "linkTo":"/work/JPMC_Savings",
          "name":"JPMC_Savings"
      },
      {
          "imageSrc":"/images/work/JPMC_Savings/2.webp",
          "linkTo":"/work/JPMC_Savings",
          "name":"JPMC_Savings"
      },
      {
          "imageSrc":"/images/work/JPMC_Savings/2.webp",
          "linkTo":"/work/JPMC_Savings",
          "name":"JPMC_Savings"
      }
  ]
  },
};