import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-components',
  globalStyle: 'src/global/styles.css',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'www',
    },
  ],
};
