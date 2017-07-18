import Ember from 'ember';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  queryRecord(/*modelName, query */) {
    return Ember.$.getJSON(this.get('host') + '/' + this.get('namespace') + '/foursquare_checkin');
  }
});
