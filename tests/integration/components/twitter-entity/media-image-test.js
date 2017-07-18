import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twitter-entity/media-image', 'Integration | Component | twitter entity/media image', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{twitter-entity/media-image}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#twitter-entity/media-image}}
      template block text
    {{/twitter-entity/media-image}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
