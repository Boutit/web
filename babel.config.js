module.exports = {
  presets: [
    '@babel/env',
    '@babel/react',
    '@babel/preset-typescript',
    '@linaria',
  ],
  plugins: ['relay', '@babel/plugin-proposal-class-properties'],
};
