import { setup } from '@storybook/vue3';
import type { Preview } from '@storybook/vue3';

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles';

import { createVuetify } from 'vuetify';
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import withVuetifyTheme from './decorators/withVutifyTheme';


const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
});

setup((app) => {
  app.use(vuetify);
});
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withVuetifyTheme],
};

export default preview;
