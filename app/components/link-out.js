import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import ENV from '../config/environment';

export default Component.extend({
  tagName: 'a',
  attributeBindings: ['url:href', 'target'],
  target: '_blank',
  rel: 'noopener noreferrer',
  segment: service(),

  click(/* ev */) {
    let segmentEvent = this['segment-event'];
    if (!isEmpty(ENV['segment']) && segmentEvent) {
      let segment = this.segment;
      segment.trackEvent(segmentEvent);
    }
  }
});
