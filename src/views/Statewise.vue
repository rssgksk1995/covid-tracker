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
      <canvas id="statewise-chart"></canvas>
    </div>
    <div>
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

export default {
  name: "Statewise",
  data() {
    return {
      drawer: false,
      isLoading: false,
      stateWiseCovidData: [],
      search: "",
      headers: [
        { text: "State", value: "stateName", width: "300" },
        { text: "Active", value: "activeCases", width: "200" },
        { text: "Confirmed", value: "confirmedCases", width: "200" },
        { text: "Recovered", value: "recovered", width: "200" },
        { text: "Deaths", value: "deaths", width: "100" },
        { text: "Last updated time", value: "upateTime", width: "200" },
      ],
    };
  },
  mounted() {
    let data = this.$store.state.covid.overAllStatewiseCovidData;
    if (data.length) {
      this.setStateData(data);
      this.setChartData(data);
    } else {
      this.getAllCovidCases();
    }
  },

  methods: {
    getAllCovidCases() {
      this.isLoading = true;
      this.$store
        .dispatch("covid/getOverAllCovidData")
        .then((res) => {
          let data = this.$store.state.covid.overAllStatewiseCovidData;
          this.setStateData(data);
          this.setChartData(data);
          this.isLoading = false;
        })
        .catch((error) => {
          console.log("error", error);
          this.isLoading = false;
        });
    },
    setStateData(data) {
      let newData = [];
      data.forEach((element) => {
        newData.push({
          stateName: `${element.state}(${element.statecode})`,
          activeCases: element.active,
          confirmedCases: element.confirmed,
          deaths: element.deaths,
          recovered: element.recovered,
          upateTime: element.lastupdatedtime,
        });
      });
      this.stateWiseCovidData = newData;
    },
    setChartData(data) {
      let totalLevel = "";
      let chartLabel = [];
      // let confirmDataSet = [];
      let activeDataSet = [];
      let totalDataSet = [];
      let recoveredDataSet = [];
      let deadDataSet = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].state === "Total") {
          totalLevel = data[i].confirmed;
        } else {
          chartLabel.push(data[i].state);
          // confirmDataSet.push(data[i].confirmed);
          activeDataSet.push(data[i].active);
          totalDataSet.push(
            parseInt(data[i].confirmed) +
              parseInt(data[i].recovered) +
              parseInt(data[i].deaths)
          );
          recoveredDataSet.push(data[i].recovered);
          deadDataSet.push(data[i].deaths);
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
