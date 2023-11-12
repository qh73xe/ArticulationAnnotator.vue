import type { App } from 'vue';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import AVideo from './components/video/AVideo.vue';
export default {
  install(app: App) {
    app.component('AVideo', AVideo);
  },
};
