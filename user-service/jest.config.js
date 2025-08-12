module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir:'.',
  testRegex: '.*\\.spec\\.ts$',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};