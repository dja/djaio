import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  timestamp: attr(''),
  body: attr(),

  url: Ember.computed('body.id_str', function() {
    return 'https://twitter.com/statuses/' + this.get('body.id_str');
  }),

  mediaCount: Ember.computed('body.extended_entities.media.[]', function() {
    return this.get('body.extended_entities.media.length');
  }),

  mediaUrl: Ember.computed('body.extended_entities.media.[]', function() {
    let media = this.get('body.extended_entities.media.firstObject');
    return media.media_url_https + ':small';
  }),

  mediaType: Ember.computed('body.extended_entities.media.[]', function() {
    let media = this.get('body.extended_entities.media.firstObject');
    return media.type;
  }),

  mediaShape: Ember.computed('body.extended_entities.media.[]', function() {
    let media = this.get('body.extended_entities.media.firstObject'),
      width = media.sizes.large.w,
      height = media.sizes.large.h;
    if (width == height) {
      return 'square';
    } else if (width > height) {
      return 'landscape';
    } else {
      return 'portrait';
    }
  }),
});
