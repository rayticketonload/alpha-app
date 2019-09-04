const path = require('path');
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#25b864' },
  }),
  addWebpackAlias({
    '@src': path.resolve(__dirname, 'src'),
    '@store': path.resolve(__dirname, 'src/store'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@constants': path.resolve(__dirname, 'src/constants'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@style': path.resolve(__dirname, 'src/style'),
  }),
);
