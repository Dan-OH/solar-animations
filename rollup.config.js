import terser from '@rollup/plugin-terser';
import scss from 'rollup-plugin-scss';
import pkg from './package.json' assert { type: 'json' };

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
      name: 'solar-animations',
      file: pkg.browser,
      format: 'umd',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
};
