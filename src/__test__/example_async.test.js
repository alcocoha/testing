//callbacks
const asyncCallback = (cb) => {
  setTimeout(() => {
    cb(true);
  }, 1000)
}

//promesas
const asyncPromise = () => new Promise((resolve) => resolve(true))

describe('ASYNC CODE', () => {
  test('async con callback', (done) => {
    asyncCallback((result) => {
      expect(result).toBe(true);
      done();
    });
  });

  test('async con promesas', () => {
    return asyncPromise().then(result => expect(result).toBe(true));
  });

  test.only('async con ASYNC AWAIT', async () => {
    const result = await asyncPromise();
    expect(result).toBe(true);
  });
});