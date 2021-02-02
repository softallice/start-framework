const app = require('../../src/app');

describe('\'cardinfos\' service', () => {
  it('registered the service', () => {
    const service = app.service('cardinfos');
    expect(service).toBeTruthy();
  });
});
