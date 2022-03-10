const axios = require("axios");

const getCatFact = async () => {
  try {
    const result = await axios.get("https://catfact.ninja/fact");
    return result.data.fact;
  } catch (e) {
    return null;
  }
};

export { getCatFact };
