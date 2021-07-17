module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  testMatch: [
    "<rootDir>/src/components/**/*.spec.(js|jsx|ts|tsx)"
  ]
};
