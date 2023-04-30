const path = require('path');
import { defineConfig } from 'dumi';

export default defineConfig({
  base: '.',
  publicPath: '/components-in-mind/',
  alias: {
    'components-in-mind': path.resolve(__dirname, '/src')
  },
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'component',
  },
});
