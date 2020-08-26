import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/oasis/index.js',
  output: {
    file: 'src/public/assets/js/oasis-built.js',
    format: 'esm'
  },
  plugins: [nodeResolve()]
};