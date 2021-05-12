
  module.exports = {
    endpoint: 'https://api.github.com/',
    token: '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',
    platform: 'github',
    logLevel: 'debug',
    onboardingConfig: {
      extends: ['config:base'],
    },
    repositories: ['Soumi7/renovate-docker'],
    renovateFork: true,
    gitAuthor: "Soumi Bardhan <soumibardhan10@gmail.com>",
    username: "Soumi7",
    onboarding: false,
    printConfig: true,
    requireConfig: false,
  };