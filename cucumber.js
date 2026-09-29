module.exports = {
  default: {
    paths: ['tests/bdd/features/**/*.feature'],
    requireModule: ['tsx/cjs'],
    require: [
      'tests/bdd/support/**/*.ts',
      'tests/bdd/steps/**/*.ts'
    ],
    format: ['progress'],
    formatOptions: {},
    timeout: 30000
  }
};