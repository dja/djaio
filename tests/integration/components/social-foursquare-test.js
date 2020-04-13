import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | social foursquare', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{social-foursquare}}`);

    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#social-foursquare}}
        template block text
      {{/social-foursquare}}
    `);

    assert.dom('*').hasText('template block text');
  });
});
