<template>
  <div class="background">
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
          :single-expand="singleExpand"
          :expanded.sync="expanded"
          show-expand
          item-key="recovered"
          :sort-by="['recovered']"
          :sort-desc="[true]"
        >
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <v-simple-table light>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        District Name
                      </th>
                      <th class="text-left">
                        Tested
                      </th>
                      <th class="text-left">
                        Confirm
                      </th>
                      <th class="text-left">
                        Recovered
                      </th>
                      <th class="text-left">
                        Deaths
                      </th>
                      <th class="text-left">
                        Vaccinated1
                      </th>
                      <th class="text-left">
                        Vaccinated2
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="eachDistricts in item.districts"
                      :key="eachDistricts.districtName"
                    >
                      <td>
                        {{ eachDistricts.districtName }}
                      </td>
                      <td>
                        {{ eachDistricts.tested }}
                      </td>
                      <td>
                        {{ eachDistricts.confirmedCases }}
                      </td>
                      <td>
                        {{ eachDistricts.recovered }}
                      </td>
                      <td>
                        {{ eachDistricts.deaths }}
                      </td>
                      <td>
                        {{ eachDistricts.vaccinated1 }}
                      </td>
                      <td>
                        {{ eachDistricts.vaccinated2 }}
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>

              <ul id="example-1"></ul>
            </td>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>
<script>
import {getStateName} from '../utils/common';
import moment from 'moment';
export default {
  name: "StateWiseDetails",
  data() {
    return {
      singleExpand: true,
      expanded: [],
      drawer: false,
      isLoading: false,
      stateWiseCovidData: [],
      search: "",
      headers: [
        { text: "State", value: "stateName", width: "300" },
        { text: "Confirmed", value: "confirmedCases", width: "200" },
        { text: "Recovered", value: "recovered", width: "200" },
        { text: "Deaths", value: "deaths", width: "100" },
        { text: "vaccinated1", value: "vaccinated1", width: "200" },
        { text: "Vaccinated2", value: "vaccinated2", width: "200" },
        { text: "Tested", value: "tested", width: "200" },
        { text: "Updated", value: "updateTime", width: "200" },
      ],
    };
  },

  mounted() {
    let data = this.$store.state.covid.stateWiseDetailedData;
    if (data.length) {
      this.setStateData(data);
    } else {
      this.getStateWiseDetailedCases();
    }
  },

  methods: {
    getStateWiseDetailedCases() {
      this.isLoading = true;
      this.$store
        .dispatch("covid/getStateWiseDetailedCases")
        .then((res) => {
          let data = this.$store.state.covid.stateWiseDetailedData;
          this.setStateData(data);
          this.isLoading = false;
        })
        .catch((error) => {
          console.log("error", error);
          this.isLoading = false;
        });
    },
    setStateData(data) {
      let keys = Object.keys(data);
      let newData = [];
      keys.forEach((eachName) => {
        let element = data[eachName];
        newData.push({
          stateName: getStateName(eachName),
          tested: element.total.tested,
          confirmedCases: element.total.confirmed,
          deaths: element.total.deceased,
          recovered: element.total.recovered,
          vaccinated1: element.total.vaccinated1,
          vaccinated2: element.total.vaccinated2,
          districts: this.getDistrictDetails(element.districts),
          updateTime: moment(element.meta.last_updated).format('DD-MMM-YYYY'),
        });
      });
      this.stateWiseCovidData = newData;
    },
    getDistrictDetails(districtObject) {
      if (districtObject) {
        let destrictArray = [];
        let districtNames = Object.keys(districtObject);
        districtNames.forEach((eachName) => {
          let element = districtObject[eachName];
          destrictArray.push({
            districtName: eachName,
            tested: element.total.tested,
            confirmedCases: element.total.confirmed,
            deaths: element.total.deceased,
            recovered: element.total.recovered,
            vaccinated1: element.total.vaccinated1,
            vaccinated2: element.total.vaccinated2,
          });
        });
        return destrictArray;
      } else {
        return [];
      }
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
