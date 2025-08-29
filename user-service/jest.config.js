module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir:'.',
  testRegex: '.*\\.spec\\.ts$',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  reporters: [
    'default',
    ['jest-html-reporter', {
      pageTitle: 'User Service Test Report',
      outputPath: 'report/index.html',
      includeFailureMsg: true
    }]
  ]
};