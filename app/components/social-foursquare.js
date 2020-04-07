import { computed } from '@ember/object';
import Component from '@ember/component';
import moment from 'moment';

export default Component.extend({
  classNames: ['social-foursquare'],

  backgroundColor: computed('model.foursquareCheckin.color', function() {
    let color = this.get('model.foursquareCheckin.color'),
      time = this.get('model.foursquareCheckin.timestamp'),
      hour = moment(time).hour();
    if (hour >= 19 || hour < 5) {
      return this._colorLuminance(color, -0.25);
    } else if (hour > 5 && hour <= 13) {
      return this._colorLuminance(color, 0.15);
    } else {
      return color;
    }
  }),

  // https://www.sitepoint.com/javascript-generate-lighter-darker-color/
  _colorLuminance(hex, lum) {

    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;

    // convert to decimal and change luminosity
    var rgb = "#",
      c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00" + c).substr(c.length);
    }

    return rgb;
  }
});
