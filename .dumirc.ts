const path = require('path');
import { defineConfig } from 'dumi';

export default defineConfig({
  publicPath: '/docs/',
  alias: {
    'components-in-mind': path.resolve(__dirname, '/src')
  },
  outputPath: 'docs',
  themeConfig: {
    name: 'component',
  },
});
