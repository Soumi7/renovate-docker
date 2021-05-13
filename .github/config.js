
  module.exports = {
    endpoint: 'https://api.github.com/',
    token: TOKEN,
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