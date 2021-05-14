describe('SETUP TEARDOWN', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });

  beforeEach(() => {
    console.log('beforeEach');
  });

  afterEach(() => {
    console.log('afterEach');
  });

  afterAll(() => {
    console.log('afterAll');
  });

  test('ejemplo 1', () => {
    expect(true).toBe(true);
  })

  test('ejemplo 2', () => {
    expect(true).toBe(true);
  })
});