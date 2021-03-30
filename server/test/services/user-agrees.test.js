const app = require('../../src/app');

describe('\'user-agrees\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-agrees');
    expect(service).toBeTruthy();
  });
});
