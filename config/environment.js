/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'djaio',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
        // 'ds-pushpayload-return': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.host = 'http://localhost:3000';
    ENV.namespace = 'api/v1';
    ENV.ws_host = 'ws://localhost:3000/cable';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.host = process.env.api_host;
    ENV.namespace = process.env.api_namespace;
    ENV.ws_host = process.env.ws_host;
    ENV['segment'] = {
      WRITE_KEY: process.env.segment_key
    };
  }

  return ENV;
};
