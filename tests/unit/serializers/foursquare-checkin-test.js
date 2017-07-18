import { moduleForModel, test } from 'ember-qunit';

moduleForModel('foursquare-checkin', 'Unit | Serializer | foursquare checkin', {
  // Specify the other units that are required for this test.
  needs: ['serializer:foursquare-checkin']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
