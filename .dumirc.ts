const path = require('path');
import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/docs-dist/',
  publicPath: '/docs-dist/',
  alias: {
    'components-in-mind': path.resolve(__dirname, '/src')
  },
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'component',
  },
});
