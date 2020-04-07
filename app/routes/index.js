import { debug } from '@ember/debug';
import { hash } from 'rsvp';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from '../config/environment';

export default Route.extend({
  cableService: service('cable'),

  model() {
    return hash({
      foursquareCheckins: this.store.query('foursquare-checkin', { count: 1 }),
      twitterStatuses: this.store.query('twitter-status', { count: 20 })
    });
  },

  afterModel(/* model, transition */) {
    let self = this;
    let consumer = this.cableService.createConsumer(ENV.ws_host);

    consumer.subscriptions.create("FoursquareCheckinsChannel", {
      connected() {
        debug("FoursquareCheckinsChannel#connected")
      },
      received() {
        self.refresh();
      },
      disconnected() {
        debug("FoursquareCheckinsChannel#disconnected");
      }
    });
    consumer.subscriptions.create("TwitterStatusesChannel", {
      connected() {
        debug("TwitterStatusesChannel#connected")
      },
      received() {
        self.refresh();
      },
      disconnected() {
        debug("TwitterStatusesChannel#disconnected");
      }
    });
  },
});
