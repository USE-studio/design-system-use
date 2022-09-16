import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';

// import { Checkbox } from './Checkbox';
import Checkbox from './Checkbox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
}
// } as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Checkbox> = (args) => <Button {...args} />;
const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {
  primary: true,
  label: 'Checkbox',
}
const figmaUrl = 'https://www.figma.com/file/M0GRfjcIleAgPBOvBi4ELh/Engine-Designsystem?node-id=2%3A11'
Default.parameters = {
  design: {
    type: 'figma',
    url: figmaUrl
  }
}

export const Checked = Template.bind({});
Checked.args = {
  label: 'Checkbox',
}

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
