import Ember from 'ember';
import DS from 'ember-data';
import { pluralize } from 'ember-inflector';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.host,
  namespace: ENV.namespace,

  pathForType: function(modelName) {
    var underscored = Ember.String.underscore(modelName);
    return pluralize(underscored);
  }
});
