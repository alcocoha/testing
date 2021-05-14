import { storage } from "../lib/storage";
import { saveUserName, getUserName } from "../user";
jest.mock("../lib/storage");

describe("MOCKS", () => {
	test("Primer mock", () => {
		const myMock = jest.fn();

		// console.log(myMock);
		myMock();
		myMock();
		myMock();

		expect(myMock).toHaveBeenCalled();
		expect(myMock).toHaveBeenCalledTimes(3);
	});

	test("segundo mock", () => {
		const myMock = jest.fn().mockReturnValueOnce(true).mockReturnValueOnce("Hello world").mockReturnValueOnce(5);

		// console.log(myMock);
		const result1 = myMock();
		const result2 = myMock();
		const result3 = myMock();

		expect(myMock).toHaveBeenCalled();
		expect(myMock).toHaveBeenCalledTimes(3);

		expect(result1).toBe(true);
		expect(result2).toBe("Hello world");
		expect(result3).toBe(5);
	});

	test("tercer mock", () => {
		console.log(`storage`, storage);
		const name = "Jorge";
		storage.get.mockReturnValueOnce(name);

		saveUserName(name);
		const result = getUserName();

		expect(result).toBe(name);
		expect(storage.save).toHaveBeenCalled();
		expect(storage.save).toHaveBeenCalledTimes(1);
		expect(storage.get).toHaveBeenCalledWith({ key: "username" });
	});
});
