const app = require('../../src/app');

describe('\'vaccinations\' service', () => {
  it('registered the service', () => {
    const service = app.service('vaccinations');
    expect(service).toBeTruthy();
  });
});
