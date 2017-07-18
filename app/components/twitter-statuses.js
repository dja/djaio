import Ember from 'ember';

export default Ember.Component.extend({

  init() {
    this._super(...arguments);
    setInterval(() => {
      this.goToNextStatus();
    }, 10000);
  },

  currentStatus: Ember.computed('statuses', 'tweetIndex', function() {
    return this.get('statuses').objectAt('tweetIndex');
  }),

  selectedTweetIndex: 0,

  goToNextStatus() {
    let index = this.get('selectedTweetIndex');
    if (index + 1 >= this.get('statuses.length')) {
      index = 0;
    } else {
      index += 1;
    }
    this.set('selectedTweetIndex', index);
  }

});
