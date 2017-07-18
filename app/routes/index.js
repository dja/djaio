import Ember from 'ember';
import ENV from '../config/environment';

const {
  inject: {
    service
  }
} = Ember;

export default Ember.Route.extend({
  cableService: service('cable'),

  model() {
    return Ember.RSVP.hash({
      foursquareCheckins: this.store.query('foursquare-checkin', { count: 1 }),
      twitterStatuses: this.store.query('twitter-status', { count: 20 })
    });
  },

  afterModel(model, transition) {
    let self = this;
    let consumer = this.get('cableService').createConsumer(ENV.ws_host);

    consumer.subscriptions.create("FoursquareCheckinsChannel", {
      connected() {
        Ember.debug("FoursquareCheckinsChannel#connected")
      },
      received() {
        self.refresh();
      },
      disconnected() {
        Ember.debug("FoursquareCheckinsChannel#disconnected");
      }
    });
    consumer.subscriptions.create("TwitterStatusesChannel", {
      connected() {
        Ember.debug("TwitterStatusesChannel#connected")
      },
      received() {
        self.refresh();
      },
      disconnected() {
        Ember.debug("TwitterStatusesChannel#disconnected");
      }
    });
  },
});
