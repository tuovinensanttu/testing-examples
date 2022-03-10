//import jest from "jest";

import { getUserName } from "./getUserName";

it("Returns users whole name", () => {
  expect(getUserName()).toBe("Santtu Tuovinen");
});

jest.mock("./userStore", () => ({
  UserStore: {
    getUser: jest.fn().mockImplementation((arg) => ({
      firstName: "Santtu",
      lastName: "Tuovinen",
    })),
    setUser: jest.fn(),
  },
}));

it("Returns display name", () => {
  expect(getUserName(1)).toBe("Santtu Tuovinen");
});
