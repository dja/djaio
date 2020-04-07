import { computed } from '@ember/object';
import Model, { attr } from '@ember-data/model';

export default Model.extend({
  timestamp: attr(''),
  body: attr(),

  url: computed('body.id_str', function() {
    return 'https://twitter.com/statuses/' + this.get('body.id_str');
  }),

  mediaCount: computed('body.extended_entities.media.[]', function() {
    return this.get('body.extended_entities.media.length');
  }),

  mediaUrl: computed('body.extended_entities.media.[]', function() {
    let media = this.get('body.extended_entities.media.firstObject');
    if (typeof media == 'undefined') {
      return;
    }
    return media.media_url_https + ':small';
  }),

  mediaType: computed('body.extended_entities.media.[]', function() {
    let media = this.get('body.extended_entities.media.firstObject');
    if (typeof media == 'undefined') {
      return;
    }
    return media.type;
  }),

  mediaShape: computed('body.extended_entities.media.[]', function() {
    let media = this.get('body.extended_entities.media.firstObject');
    if (typeof media == 'undefined') {
      return;
    }
    let width = media.sizes.large.w,
        height = media.sizes.large.h;
    if (width >= height) {
      return 'landscape';
    } else {
      return 'portrait';
    }
  }),
});
