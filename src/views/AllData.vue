<template>
  <div class="background">
    <div>
      <canvas id="statewise-chart"></canvas>
    </div>
    <div v-if="isLoading" class="loader">
      <v-progress-circular
        :size="70"
        :width="7"
        indeterminate
        color="red"
      ></v-progress-circular>
    </div>
    <div v-else>
      <v-card dark>
        <v-card-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            clearable
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="stateWiseCovidData"
          :footer-props="{
            'items-per-page-options': [8, 20, 30, -1],
          }"
          :items-per-page="-1"
          class="elevation-1"
          :search="search"
          dark
          height="100%"
          :sort-by="['activeCases']"
           :sort-desc="[true]"
        >
          <template v-slot:item[recovered]="{ item }">
            <span class="recoveredCases">{{ item.recovered }}</span>
          </template>
          <template v-slot:item[deaths]="{ item }">
            <span class="dailydeceased">{{ item.deaths }}</span>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js/auto";
import { getStateName } from "../utils/common";
import moment from 'moment';

export default {
  name: "Statewise",
  data() {
    return {
      drawer: false,
      isLoading: false,
      stateWiseCovidData: [],
      search: "",
      headers: [
        { text: "State", value: "stateName", width: "200" },
        { text: "Active", value: "activeCases", width: "200" },
        { text: "Confirmed", value: "confirmedCases", width: "200" },
        { text: "Recovered", value: "recovered", width: "200" },
        { text: "Deaths", value: "deaths", width: "100" },
        { text: "Tested", value: "tested", width: "100" },
        { text: "Vaccinated1", value: "vaccinated1", width: "100" },
        { text: "Fully Vaccinated", value: "fullyVaccinated", width: "100" },
        { text: "Last updated time", value: "upateTime", width: "200" },
      ],
    };
  },

  mounted() {
    let data = this.$store.state.covid.timeSeriesData;
    if (data.length) {
      this.setStateData(data);
      this.setChartData(data);
    } else {
      this.getAllCovidCasesTimeSeries();
    }
  },

  methods: {
    getAllCovidCasesTimeSeries() {
      this.isLoading = true;
      this.$store
        .dispatch("covid/fetchTimeSerieData")
        .then((res) => {
          let timeSeriesData = this.$store.state.covid.timeSeriesData;
          this.setStateData(timeSeriesData);
          this.setChartData(timeSeriesData);
          this.isLoading = false;
        })
        .catch((error) => {
          console.log("error", error);
          this.isLoading = false;
        });
    },
    // getAllCovidCases() {
    //   this.isLoading = true;
    //   this.$store
    //     .dispatch("covid/getOverAllCovidData")
    //     .then((res) => {
    //       let data = this.$store.state.covid.overAllStatewiseCovidData;
    //       this.setStateData(data);
    //       this.setChartData(data);
    //       this.isLoading = false;
    //     })
    //     .catch((error) => {
    //       console.log("error", error);
    //       this.isLoading = false;
    //     });
    // },

    setStateData(data) {
      let newData = [];
      for (const [stateCode, value] of Object.entries(data)) {
        const { dates } = value;

        let latestKey = Object.keys(dates)[Object.keys(dates).length - 1];
        let latestValue = dates[latestKey];
        const { delta, total } = latestValue;
        if (total) {
          const {
            confirmed,
            deceased,
            recovered,
            tested,
            vaccinated1,
            vaccinated2,
          } = total;
          newData.push({
            stateName: getStateName(stateCode),
            activeCases: this.calculateActive(confirmed, deceased, recovered),
            confirmedCases: confirmed,
            deaths: deceased,
            recovered: recovered,
            upateTime: moment(latestKey).format('DD-MMM-YYYY'),
            tested: tested,
            vaccinated1: vaccinated1,
            fullyVaccinated: vaccinated2,
          });
        }
      }
      this.stateWiseCovidData = newData;
    },
    calculateActive(confirmed, deceased, recovered) {
      return confirmed - (recovered + deceased);
    },
    setChartData(data) {
      let totalLevel = "";
      let chartLabel = [];
      // let confirmDataSet = [];
      let activeDataSet = [];
      let totalDataSet = [];
      let recoveredDataSet = [];
      let deadDataSet = [];

      for (const [stateCode, value] of Object.entries(data)) {
        const { dates } = value;

        let latestKey = Object.keys(dates)[Object.keys(dates).length - 1];
        let latestValue = dates[latestKey];
        const { delta, total } = latestValue;

        if (total) {
          const {
            confirmed,
            deceased,
            recovered,
            tested,
            vaccinated1,
            vaccinated2,
          } = total;
          if (stateCode !== "TT") {
            chartLabel.push(getStateName(stateCode));
            // confirmDataSet.push(data[i].confirmed);
            activeDataSet.push(
              this.calculateActive(confirmed, deceased, recovered)
            );
            totalDataSet.push(confirmed);
            recoveredDataSet.push(recovered);
            deadDataSet.push(deceased);
          }
        }
      }

      new Chart(document.getElementById("statewise-chart"), {
        type: "bar",
        data: {
          labels: chartLabel,
          datasets: [
            {
              label: `Death cases`,
              backgroundColor: ["#FF0000"],
              data: deadDataSet,
            },
            // {
            //   label: `Confirmed cases`,
            //   backgroundColor: ["#FF7F50"],
            //   data: confirmDataSet,
            // },
            {
              label: `Recovered cases`,
              backgroundColor: ["#008000"],
              data: recoveredDataSet,
            },
            {
              label: `Active cases`,
              backgroundColor: ["#40E0D0"],
              data: activeDataSet,
            },
            {
              label: `Total cases`,
              backgroundColor: ["#6495ED"],
              data: totalDataSet,
            },
          ],
        },

        options: {
          responsive: true,
          scales: {
            xAxes: [
              {
                stacked: true,
                ticks: {
                  beginAtZero: true,
                  maxRotation: 0,
                  minRotation: 0,
                },
              },
            ],
            yAxes: [
              {
                stacked: true,
              },
            ],
          },
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: `Total confirmed cases: ${totalLevel}`,
            },
          },
        },
      });
    },
  },
};
</script>

<style>
.daily-result-table {
  width: 100vw;
}
.dailydeceased {
  color: #ff2400;
}
.nav-heading {
  color: black;
}
.recoveredCases {
  color: #03c04a;
}
.loader {
  position: absolute;
  top: 50vh;
  left: 50vw;
}
.background {
  background-color: #1e1e1e;
  min-height: 100vh;
}
</style>
