import { assert, debug } from '@ember/debug';
import Ember from 'ember';

export function initialize( /* application */ ) {
  // application.inject('route', 'foo', 'service:foo');
  const bugsnagLoaded = typeof Bugsnag !== 'undefined';
  assert("Bugsnag hasn't loaded yet.", !bugsnagLoaded);
  if (bugsnagLoaded && (this.config && this.config.environment !== 'test')) {
    debug('Bugsnag Error Hanlder setup');
    Ember.onerror = function(error) {
      Bugsnag.notifyException(error)
    };
  }
}

export default {
  name: 'bugsnag',
  after: 'segment',
  initialize
};
