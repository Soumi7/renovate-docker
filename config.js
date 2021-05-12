module.exports = {
    endpoint: 'https://self-hosted.gitlab/api/v4/',
    token: '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',
    platform: 'github',
    logLevel: 'debug',
    onboardingConfig: {
      extends: ['config:base'],
    },
    repositories: ['username/repo', 'orgname/repo'],
  };