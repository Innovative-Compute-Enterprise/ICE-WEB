import { resolve } from 'path';

export default {
  css: [resolve(__dirname, 'assets/tailwind.css')],
  nitro: {
    preset: 'vercel-edge',
  },
};
