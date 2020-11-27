import axios from "axios";

export default {
  getAllCovidCases() {
    const url = `https://api.covid19india.org/data.json`;
    return axios.get(url);
  }
};
