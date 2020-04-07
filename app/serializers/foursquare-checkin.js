import RESTSerializer from '@ember-data/serializer/rest';
import { decamelize } from '@ember/string';

export default RESTSerializer.extend({

  keyForAttribute(key) {
    if (key == 'body') {
      return 'data';
    }
    return decamelize(key);
  }
});
