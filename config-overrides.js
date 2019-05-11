const { override, addBabelPlugins } = require('customize-cra');

const rootImport = [
  'root-import',
  {
    rootPathPrefix: '~',
    rootPathSuffix: 'src',
  },
];

module.exports = override(...addBabelPlugins(rootImport));
