module.exports = {
  clearMocks: true,
  moduleNameMapper: {
    "\\.css$": 'identity-obj-proxy'
  },
  testEnvironment: "jsdom",
  "transform": {
    "^.+\\.js$": "<rootDir>/jest.transform.js"
  }
};
