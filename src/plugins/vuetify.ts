import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#edf1ff',
          primary: '#0956cf',
          'on-primary': '#ffffff',
        },
      },
    },
  },
  defaults: {
    VTextField: { color: 'primary' },
    VTextarea: { color: 'primary' },
  },
});
