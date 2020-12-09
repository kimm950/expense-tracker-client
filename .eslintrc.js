const path = require('path');

module.exports = {
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: [
    'tests/',
    'DevTools/',
    'registerServiceWorker.js',
    'rollbar.umd.min.js',
    '*.spec.*',
    '*.test.*',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            alias: { '@src': path.resolve('app/javascript/src') },
          },
        },
      },
    },
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
  globals: {
    window: true,
    document: true,
  },
  plugins: ['react'],
};
