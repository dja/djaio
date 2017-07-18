import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  keyForAttribute(key) {
    if (key == 'body') {
      return 'data';
    }
    return Ember.String.decamelize(key);
  }
});
