import fetch from 'fetch';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  queryRecord(/*modelName, query */) {
    return fetch(this.host + '/' + this.namespace + '/foursquare_checkin');
  }
});
