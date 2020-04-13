import { computed } from '@ember/object';
import Component from '@ember/component';
import { inject as service } from '@ember/service';

const TWITTER_POLL_INT = 10000;

export default Component.extend({
  classNames: ['twitter-statuses'],
  poll: service(),

  init() {
    this._super(...arguments);
    this.pollId = this.poll.addPoll({
      interval: TWITTER_POLL_INT,
      callback: this.goToNextStatus.bind(this)
    });
  },

  currentStatus: computed('statuses', 'tweetIndex', function() {
    return this.statuses.objectAt('tweetIndex');
  }),

  selectedTweetIndex: 0,

  goToNextStatus() {
    let index = this.selectedTweetIndex;
    if (index + 1 >= this.statuses.length) {
      index = 0;
    } else {
      index += 1;
    }
    this.set('selectedTweetIndex', index);
  },

  willDestroyElement() {
    let pollId = this.pollId;
    this.poll.stopPoll(pollId);
  }

});
