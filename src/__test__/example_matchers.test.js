describe("MATCHERS", () => {
	test("toBe", () => {
		expect(2 + 4).toBe(6);
	});

	test("toEqual", () => {
		const data = { one: 1 };
		data["two"] = 2;
		expect(data).toEqual({ one: 1, two: 2 });

    const arr = [ '123', 12 ];
		expect(arr).toEqual([ '123', 12 ]);
	});

  test('not', () => {
    expect(true).not.toBe(false);
  })

  test('String', () => {
    expect('team').not.toMatch(/I/);
  });
});
