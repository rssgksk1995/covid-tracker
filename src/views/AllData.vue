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
						'items-per-page-options': [8, 20, 30, -1]
					}"
					:items-per-page="8"
					class="elevation-1"
					:search="search"
					dark
					height="100%"
				>
					<template v-slot:item.deceased="{ item }">
						<span class="dailydeceased">{{ item.deceased }}</span>
					</template>
					<template v-slot:item.recovered="{ item }">
						<span class="recoveredCases">{{ item.recovered }}</span>
					</template>
					<template v-slot:item.totalRecovered="{ item }">
						<span class="allRecoveredCases">{{ item.totalRecovered }}</span>
					</template>
					<template v-slot:item.totalDeceased="{ item }">
						<span class="totaldeceased">{{ item.totalDeceased }}</span>
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
			search: "",
			headers: [
				{ text: "Date", value: "date", width: "200" },
				{ text: "Confirmed", value: "confirmed", width: "200" },
				{ text: "Deceased", value: "deceased", width: "200" },
				{ text: "Recovered", value: "recovered" },
				{ text: "Total confirmed", value: "totalConfirmed", width: "200" },
				{ text: "Total deceased", value: "totalDeceased", width: "200" },
				{ text: "Total recovered", value: "totalRecovered", width: "200" }
			],

			totalCases: []
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
					this.casesTimeSeries = response.data.cases_time_series.reverse();
					this.casesStatewise = response.data.statewise;
					this.casesTested = response.data.tested;
					this.isLoading = false;
					this.setAllTimeData(response.data.cases_time_series.reverse());
				})
				.catch(e => {
					console.log(e);
					this.isLoading = false;
				});
		},
		setAllTimeData(data) {
			let newData = [];
			data.forEach(element => {
				newData.push({
					date: moment(element.dateymd).format("DD-MM-YYYY hh:mm:a"),
					confirmed: element.dailyconfirmed,
					recovered: element.dailyrecovered,
					deceased: element.dailydeceased,
					totalConfirmed: element.totalconfirmed,
					totalDeceased: element.totaldeceased,
					totalRecovered: element.totalrecovered
				});
			});
			this.totalCases = newData;
		},
		getColor(calories) {
			if (calories > 400) return "red";
			else if (calories > 200) return "orange";
			else return "green";
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
