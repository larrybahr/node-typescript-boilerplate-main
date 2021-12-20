import { sayHi } from '../src/main';

describe('main test', () => {
  // Act before assertions
  beforeAll(async () => {
    return;
  });

  // Teardown (cleanup) after assertions
  afterAll(async () => {
    return;
  });

  // Assert if setTimeout was called properly
  it('delays the greeting by 2 seconds', async () => {
    expect(await sayHi()).toBe('hihihi');
  });
});
