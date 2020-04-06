import Ember from 'ember';
const { inject: { service } } = Ember;

const TWITTER_POLL_INT = 10000;

export default Ember.Component.extend({
  poll: service(),

  init() {
    this._super(...arguments);
    let pollId = this.get('poll').addPoll({
      interval: TWITTER_POLL_INT,
      callback: this.goToNextStatus.bind(this)
    });
    this.set('pollId', pollId);
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
  },

  willDestroyElement() {
    let pollId = this.get('pollId');
    this.get('poll').stopPoll(pollId);
  }

});
