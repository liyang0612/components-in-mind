const path = require('path');
import { defineConfig } from 'dumi';

export default defineConfig({
  alias: {
    'components-in-mind': path.resolve(__dirname, '/src')
  },
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'component',
  },
});
