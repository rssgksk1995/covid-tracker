<template>
	<div>
		<div v-if="isLoading" class="loader">
			<v-progress-circular
				:size="70"
				:width="7"
				indeterminate
				color="black"
			></v-progress-circular>
		</div>
		<div>
			<v-card dark>
				<v-card-title>
					Covid records
					<v-spacer></v-spacer>
					<v-text-field
						v-model="search"
						append-icon="mdi-magnify"
						label="Search"
						single-line
						hide-details
					></v-text-field>
				</v-card-title>
				<v-data-table
					:headers="headers"
					:items="stateWiseCovidData"
					:footer-props="{
						'items-per-page-options': [8, 20, 30, -1]
					}"
					:items-per-page="8"
					class="elevation-1"
					:search="search"
					dark
					height="70vh"
				>
					<template v-slot:item.recovered="{ item }">
						<span class="recoveredCases">{{ item.recovered }}</span>
					</template>
					<template v-slot:item.deaths="{ item }">
						<span class="dailydeceased">{{ item.deaths }}</span>
					</template>
				</v-data-table>
			</v-card>
		</div>
	</div>
</template>
<script>
import api from "@/api";
import moment from "moment";

export default {
	name: "LandingPage",
	data() {
		return {
			casesTimeSeries: "",
			casesStatewise: "",
			casesTested: "",
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
				{ text: "Last updated time", value: "upateTime", width: "200" }
			]
		};
	},
	mounted() {
		this.getAllCovidCases();
	},

	methods: {
		getAllCovidCases() {
			this.isLoading = true;
			api
				.getAllCovidCases()
				.then(response => {
					this.casesTimeSeries = response.data.cases_time_series;
					this.casesStatewise = response.data.statewise.reverse();
					this.casesTested = response.data.tested;
					this.isLoading = false;
					this.setStateData(response.data.statewise.reverse());
				})
				.catch(e => {
					console.log(e);
					this.isLoading = false;
				});
		},
		setStateData(data) {
			let newData = [];
			data.forEach(element => {
				newData.push({
					stateName: `${element.state}(${element.statecode})`,
					activeCases: element.active,
					confirmedCases: element.confirmed,
					deaths: element.deaths,
					recovered: element.recovered,
					upateTime: moment(element.lastupdatedtime).format(
						"DD-MM-YYYY hh:mm:a"
					)
				});
			});
			this.stateWiseCovidData = newData;

			// deltaconfirmed: "245"
			// deltadeaths: "3"
			// deltarecovered: "0"
			// migratedother: "0"
			// statenotes: "[July 12th] :20 non-covid deaths reported in state dashboard are included in
		}
	}
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
</style>
