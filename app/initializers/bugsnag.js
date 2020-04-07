import Ember from 'ember';
import bugsnag from '@bugsnag/js';
import ENV from '../config/environment';

export function initialize( /* application */ ) {
  var bugsnagClient = bugsnag(ENV.bugsnagAPIKey);
  Ember.onerror = function(error) {
    bugsnagClient.notify(error)
  };
}

export default {
  name: 'bugsnag',
  after: 'segment',
  initialize
};
