import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import Checkbox from './index';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => (
  <GlobalThemeProvider theme={theme}>
    <Checkbox {...args} />
  </GlobalThemeProvider>
);

export const DefaultView = Template.bind({});
DefaultView.args = {
  label: '광고성 정보 수신 동의(선택)',
  link: false,
  width: '300px',
  height: '30px',
};
