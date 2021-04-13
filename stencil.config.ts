import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stencil-components',
  globalStyle: 'src/global/styles.scss',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'www',
    },
  ],
};
