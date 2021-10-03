<template>
  <div class="background">
    <div v-if="isLoading" class="loader">
      <v-progress-circular
        :size="70"
        :width="7"
        indeterminate
        color="black"
      ></v-progress-circular>
    </div>
    <div>
      <canvas id="overAll-chart"></canvas>
    </div>
    <div>
      <v-card dark>
        <v-card-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            clearable
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="totalCases"
          :footer-props="{
            'items-per-page-options': [50, 75, 100, -1],
          }"
          :items-per-page="50"
          class="elevation-1"
          :search="search"
          dark
          height="100%"
        >
          <template v-slot:item[deceased]="{ item }">
            <span class="dailydeceased">{{ item.deceased }}</span>
          </template>
          <template v-slot:item[recovered]="{ item }">
            <span class="recoveredCases">{{ item.recovered }}</span>
          </template>
          <template v-slot:item[totalRecovered]="{ item }">
            <span class="allRecoveredCases">{{ item.totalRecovered }}</span>
          </template>
          <template v-slot:item[totalDeceased]="{ item }">
            <span class="totaldeceased">{{ item.totalDeceased }}</span>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "AllData",
  data() {
    return {
      casesTimeSeries: "",
      casesStatewise: "",
      casesTested: "",
      drawer: false,
      isLoading: false,
      search: "",
      headers: [
        { text: "Date", value: "date", width: "200" },
        { text: "Confirmed", value: "confirmed", width: "200" },
        { text: "Deceased", value: "deceased", width: "200" },
        { text: "Recovered", value: "recovered" },
        { text: "Total confirmed", value: "totalConfirmed", width: "200" },
        { text: "Total deceased", value: "totalDeceased", width: "200" },
        { text: "Total recovered", value: "totalRecovered", width: "200" },
      ],

      totalCases: [],
    };
  },
  mounted() {
    let data = this.$store.state.covid.overAllCovidData;
    this.getAllCovidCasesTimeSeries();

    if (data.length) {
      this.setAllTimeData(data);
      this.setChartData(data);
    } else {
      this.getAllCovidCases();
    }
  },

  methods: {
    getAllCovidCasesTimeSeries() {
      this.$store
        .dispatch("covid/fetchTimeSerieData")
        .then((res) => {
          let timeSeriesData = this.$store.state.covid.timeSeriesData;
          timeSeriesData.en;
          for (const [key, value] of Object.entries(timeSeriesData)) {
            const { dates } = value;

            let latestKey = Object.keys(dates)[Object.keys(dates).length - 1];
            let latestValue = dates[latestKey];
            const {
              delta,
              total,
            } = latestValue;
            const {
              confirmed,
              deceased,
              recovered,
              tested,
              vaccinated1,
              vaccinated2,
            } = total;
          }
          this.isLoading = false;
        })
        .catch((error) => {
          console.log("error", error);
          this.isLoading = false;
        });
    },
    getAllCovidCases() {
      this.isLoading = true;
      this.$store
        .dispatch("covid/getOverAllCovidData")
        .then((res) => {
          let data = this.$store.state.covid.overAllCovidData;
          this.setAllTimeData(data);
          this.setChartData(data);
          this.isLoading = false;
        })
        .catch((error) => {
          console.log("error", error);
          this.isLoading = false;
        });
    },
    setAllTimeData(data) {
      let newData = [];
      if (data.length) {
        for (let i = data.length - 1; i >= 0; i--) {
          newData.push({
            date: data[i].date,
            confirmed: data[i].dailyconfirmed,
            recovered: data[i].dailyrecovered,
            deceased: data[i].dailydeceased,
            totalConfirmed: data[i].totalconfirmed,
            totalDeceased: data[i].totaldeceased,
            totalRecovered: data[i].totalrecovered,
          });
        }
      }
      this.totalCases = newData;
    },
    setChartData(data) {
      let chartLabel = [];
      let dailyConfirmedDataSet = [];
      let dailyRecoveredDataSet = [];
      for (let i = 0; i <= data.length - 1; i++) {
        chartLabel.push(data[i].date);
        dailyConfirmedDataSet.push(data[i].dailyconfirmed);
        dailyRecoveredDataSet.push(data[i].dailyrecovered);
      }

      new Chart(document.getElementById("overAll-chart"), {
        type: "bar",
        data: {
          labels: chartLabel,
          datasets: [
            {
              label: "Covid recovered cases",
              backgroundColor: "#00FF7F",
              data: dailyRecoveredDataSet,
            },
            {
              label: "Covid confirmed cases",
              backgroundColor: "#3e95cd",
              data: dailyConfirmedDataSet,
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
              text: "Covid date based data",
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
.totaldeceased {
  color: #b22222;
}
.nav-heading {
  color: black;
}
.background {
  background-color: #1e1e1e;
  min-height: 100vh;
}
.recoveredCases {
  color: #03c04a;
}
.allRecoveredCases {
  color: #02993b;
}
.loader {
  position: absolute;
  top: 50vh;
  left: 50vw;
}
</style>
