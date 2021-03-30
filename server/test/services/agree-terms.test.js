const app = require('../../src/app');

describe('\'agree-terms\' service', () => {
  it('registered the service', () => {
    const service = app.service('agree-terms');
    expect(service).toBeTruthy();
  });
});
