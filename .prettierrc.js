module.exports = {
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  printWidth: 100,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  importOrder: ['^~/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
