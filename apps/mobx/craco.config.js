/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          const oneOfRule = webpackConfig.module.rules.find(rule => rule.oneOf);
          if (oneOfRule) {
            const tsxRule = oneOfRule.oneOf.find(
              rule => rule.test && rule.test.toString().includes('tsx'),
            );
            const newIncludePaths = [
              path.resolve(__dirname, '../../packages/ui/'),
            ];
            if (tsxRule) {
              if (Array.isArray(tsxRule.include)) {
                tsxRule.include = [...tsxRule.include, ...newIncludePaths];
              } else {
                tsxRule.include = [tsxRule.include, ...newIncludePaths];
              }
            }
          }
          return webpackConfig;
        },
      },
    },
  ],
};
