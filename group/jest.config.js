// jest.config.js
// module.exports = {
//     transform: {
//       "^.+\\.(js|jsx)$": "babel-jest",
//     },
//     testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
//     reporters: ["default"],
    
//     collectCoverageFrom: [
//       '<rootDir>/src/*.{js,jsx}'
//     ],
//     moduleNameMapper: {
//       'assets/images/.+?\\.svg$': '<rootDir>/test/__mocks__/svgMock.js',
//       '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ogg)$': '<rootDir>/test/__mocks__/fileMock.js',
//       '\\.(css|less|scss)$': 'identity-obj-proxy',
//       '^@/(.*)$': '<rootDir>/src/$1'
//     },
//     coverageReporters: ["json", "lcov", "text", "clover"],
//     transformIgnorePatterns: ["<rootDir>/node_modules/(?!(lodash-es|other-es-lib))"],
//   };
  
module.exports = {
    moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    testEnvironment: 'node',
    moduleNameMapper: {
        "\\.(css|less|scss|sss|styl|jpg)$": "jest-css-modules"
    },
    testMatch: [
        '<rootDir>/**/*.test.(js|jsx|ts|tsx)', '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
    ],
    transformIgnorePatterns: [
        "/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$"
      ],
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ['./jest.setup.js']
};