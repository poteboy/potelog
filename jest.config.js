module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  testMatch: [
    '**/src/**/*.(spec|test).(js|ts)',
  ],
};

// https://github.com/vuejs/vue-jest/issues/442#issuecomment-1236477636