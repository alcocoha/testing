import { storage } from "../lib/storage";

export const saveUserName = (username) => {
	storage.save({ key: "username", value: username });
};

export const getUserName = () => {
	return storage.get({ key: "username" });
};
