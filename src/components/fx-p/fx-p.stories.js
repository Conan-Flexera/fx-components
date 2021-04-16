// my-component.stories.js
import readme from './readme.md';

export default {
  title: 'Components/Button',
  parameters: {
    markdown: readme
  },
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' },
    ],
  },
};

const ButtonTemplate = (theme) => `<fx-button theme="${theme}">${theme}</fx-button>`

export const Primary = () => ButtonTemplate("primary")
export const Secondary = () => ButtonTemplate("secondary")
export const Danger = () => ButtonTemplate("danger")
