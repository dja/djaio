import Ember from 'ember';
import ENV from '../config/environment';

const {
  inject: {
    service
  },
  isEmpty
} = Ember;

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['btn', 'btn-secondary'],
  attributeBindings: ['url:href', 'target'],
  target: '_blank',
  segment: service(),

  click(/* ev */) {
    let segmentEvent = this.get('segment-event');
    if (!isEmpty(ENV['segment']) && segmentEvent) {
      let segment = this.get('segment');
      segment.trackEvent(segmentEvent);
    }
  }
});
