## Module Report
### Unknown Global

**Global**: `Ember.onerror`

**Location**: `app/initializers/bugsnag.js` at line 9

```js
  if (bugsnagLoaded && (this.config && this.config.environment !== 'test')) {
    Ember.debug('Bugsnag Error Hanlder setup');
    Ember.onerror = function(error) {
      Bugsnag.notifyException(error)
    };
```
