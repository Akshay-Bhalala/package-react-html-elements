const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const pkg = require('./package.json');

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main || 'dist/index.cjs.js',
        format: 'cjs',
        exports: 'named',
      },
      {
        file: pkg.module || 'dist/index.esm.js',
        format: 'esm',
      },
    ],
    external: ['react', 'react/jsx-runtime'],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
]; 