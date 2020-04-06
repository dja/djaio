import fetch from 'fetch';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  queryRecord(/*modelName, query */) {
    return fetch(this.get('host') + '/' + this.get('namespace') + '/foursquare_checkin');
  }
});
