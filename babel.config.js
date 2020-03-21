const tsconfig = require('./tsconfig.json')

const aliases = tsconfig.compilerOptions.paths
const aliasKeys = Object.keys(aliases)

const babelAliases = aliasKeys.reduce((obj, key) => {
  obj[key.replace('/*', '')] = aliases[key][0].replace('/*', '')
  return obj
}, {})


module.exports = function(api) {
  api.cache(true)

  return {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    plugins: [
      ["react-hot-loader/babel"],
      ["@babel/plugin-proposal-class-properties"],
      ["@babel/plugin-proposal-nullish-coalescing-operator"],
      ["@babel/plugin-proposal-optional-chaining"],
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          root: ['./'],
          alias: babelAliases,
        },
      ],
      [
        'babel-plugin-inline-import',
        {
          extensions: ['.svg'],
        },
      ],
    ],
  }
}
