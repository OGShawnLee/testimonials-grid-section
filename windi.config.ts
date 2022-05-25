import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  theme: {
    colors: {
      blue: {
        grayish: 'hsl(217, 19%, 35%)',
        blackish: 'hsl(219, 29%, 14%)',
      },
      gray: {
        light: 'hsl(0, 0%, 81%)',
        blue: 'hsl(210, 46%, 95%)',
      },
      violet: 'hsl(263, 55%, 52%)',
      white: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      barlow: ['Barlow Semi Condensed', 'sans-serif'],
    },
  },
});
