import { getCatFact } from "./catFacts";

const axios = require("axios");

const FACT =
  "The longest living cat on record according to the Guinness Book belongs to the late Creme Puff of Austin, Texas who lived to the ripe old age of 38 years and 3 days!";

jest.mock("axios");

it("Returns a fact about cats", async () => {
  const fact = await getCatFact();
  expect(fact).toEqual(FACT);
});

it("Returns a fact about cats, mocked", async () => {
  axios.get.mockResolvedValueOnce({ data: { fact: FACT } });
  const fact = await getCatFact();
  expect(fact).toEqual(FACT);
  expect(axios.get).toHaveBeenCalledTimes(1);
});
