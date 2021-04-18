import axios from "axios";

export default {
  getAllCovidCasesApi() {
    const url = `https://api.covid19india.org/data.json`;
    return axios.get(url);
  },
  getStateWiseDetailedCasesApi() {
    const url = `https://api.covid19india.org/v4/min/data.min.json`;
    return axios.get(url);
  },
  getStateWiseDateWiseCasesApi() {
    const url = `https://api.covid19india.org/v4/min/timeseries.min.json`;
    return axios.get(url);
  },
};
