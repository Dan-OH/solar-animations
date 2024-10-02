import terser from '@rollup/plugin-terser';
import scss from 'rollup-plugin-scss';
import pkg from './package.json';

export default {
  input: 'src/js/index.js',
  plugins: [
    terser(),
    scss({
      output: 'dist/solar-animations.min.css',
      outputStyle: 'compressed',
    }),
  ],
  output: [
    {
      file: 'dist/solar-animations.js',
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
    {
      name: 'solar-animations',
      file: pkg.browser,
      format: 'umd',
    },
  ],
};
