import api from "@/api";

// this.$store.state.user.userData
// this.$store.dispatch("user/getUserData", payload)

function defaultState() {
  return {
    overAllCovidData: {},
    overAllStatewiseCovidData: {},
    overAllCovidTestData: {},
    stateWiseDetailedData: {},
    timeSeriesData: {},
    errorObj: {},
  };
}

export default {
  namespaced: true,
  state: defaultState(),

  getters: {},

  mutations: {
    SET_OVER_ALL_COVID_DATA: (state, overAllCovidData) =>
      (state.overAllCovidData = overAllCovidData),
    SET_OVER_ALL_STATEWISE_COVID_DATA: (state, overAllStatewiseCovidData) =>
      (state.overAllStatewiseCovidData = overAllStatewiseCovidData),
    SET_OVER_ALL_COVID_TEST_DATA: (state, overAllCovidTestData) =>
      (state.overAllCovidTestData = overAllCovidTestData),
    SET_STATEWISE_DETAILED_DATA: (state, stateWiseDetailedData) =>
      (state.stateWiseDetailedData = stateWiseDetailedData),
    SET_TIME_SERIES_DATA: (state, data) =>
      (state.timeSeriesData = data),
    ERR_MSG: (state, err) => (state.errorObj = err),
  },

  actions: {
    getOverAllCovidData: ({ commit }) =>
      new Promise((resolve, reject) => {
        api
          .getAllCovidCasesApi()
          .then((response) => {
            commit("SET_OVER_ALL_COVID_DATA", response.data.cases_time_series);
            commit(
              "SET_OVER_ALL_STATEWISE_COVID_DATA",
              response.data.statewise
            );
            commit("SET_OVER_ALL_COVID_TEST_DATA", response.data.tested);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      }),
    getStateWiseDetailedCases: ({ commit }) =>
      new Promise((resolve, reject) => {
        api
          .getStateWiseDetailedCasesApi()
          .then((response) => {
            commit("SET_STATEWISE_DETAILED_DATA", response.data);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      }),
    fetchTimeSerieData: ({ commit }) =>
      new Promise((resolve, reject) => {
        api
          .getCasesTimeSerieDataApi()
          .then((response) => {
            commit("SET_TIME_SERIES_DATA", response.data);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      }),

      
    // getMoreUserData: ({ commit, state }, params) =>
    //   new Promise((resolve, reject) => {
    //     api
    //       .fetchUserData(params)
    //       .then((response) => {
    // commit("SET_USER_DATA", [...state.userData, ...response.data.data]);
    // commit("SET_CURRENT_PAGE", response.data.page);
    // commit("SET_TOTAL_PAGE", response.data.total_pages);
    //         resolve(response);
    //       })
    //       .catch((error) => {
    //         reject(error);
    //       });
    //   }),
  },
};
