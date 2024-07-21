module.exports = {
    presets: ['next/babel'], // Next.js의 기본 Babel 프리셋을 확장
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }]
    ]
  };