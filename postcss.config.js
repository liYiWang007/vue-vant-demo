// postcss的配置
module.exports = {
  plugins: {
    autoprefixer: { browsers: ['Android >= 4.0', 'iOS >= 8'] },
    'postcss-pxtorem': {
      // lib-flexible 的 REM 适配方案：把一行分为10分，每份占十分之一
      // 因此 rootValue 应该设置为 项目设计稿宽度的十分之一
      // Vant 是基于 375 写的，因此建议设置为 37.5
      // 缺点：使用的设计稿的尺寸都必须 / 2
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
