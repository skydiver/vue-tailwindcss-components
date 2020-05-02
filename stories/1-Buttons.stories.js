import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import { colorsList } from '../helpers/tailwindcss-colors';
import OutlineButton from '../components/Buttons/Outline.vue';

export default {
  title: 'Buttons',
  decorators: [withKnobs],
};

export const Outline = () => ({
  components: { 'outline-button': OutlineButton },
  props: {
    color: { default: select('Color', colorsList) },
    rounded: { default: boolean('Rounded', false) },
  },
  template:
    '<outline-button :color="color" :rounded="rounded">Outline Button</outline-button>',
});
