module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@providers': './src/providers',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  }
}
