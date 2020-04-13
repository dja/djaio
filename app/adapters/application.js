import RESTAdapter from '@ember-data/adapter/rest';
import { underscore } from '@ember/string';
import { pluralize } from 'ember-inflector';
import ENV from '../config/environment';

export default RESTAdapter.extend({
  host: ENV.host,
  namespace: ENV.namespace,

  pathForType: function(modelName) {
    var underscored = underscore(modelName);
    return pluralize(underscored);
  }
});
