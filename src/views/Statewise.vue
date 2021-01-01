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
		<div class="daily-result-table">
			<v-simple-table dark fixed-header height="92.3vh">
				<template v-slot:default>
					<thead>
						<tr>
							<th class="text-left">
								State
							</th>
							<th class="text-left">
								Active
							</th>
							<th class="text-left">
								Confirmed
							</th>
							<th class="text-left">
								Deaths
							</th>
							<th class="text-left">
								Recovered
							</th>
							<th class="text-left">
								Last updated time
							</th>
							<th class="text-left">
								Total recovered
							</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in casesStatewise" :key="item.date">
							<td>{{ item.state }}</td>
							<td>{{ item.active }}</td>
							<td>{{ item.confirmed }}</td>
							<td class="dailydeceased">{{ item.deaths }}</td>
							<td class="recoveredCases">{{ item.recovered }}</td>
							<td>{{ item.lastupdatedtime }}</td>
							<td>{{ item.active }}</td>
						</tr>
					</tbody>
				</template>
			</v-simple-table>
		</div>
	</div>
</template>
<script>
import api from "@/api";

export default {
	name: "LandingPage",
	data() {
		return {
			casesTimeSeries: "",
			casesStatewise: "",
			casesTested: "",
			drawer: false,
      isLoading: false,
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
				})
				.catch(e => {
					console.log(e);
          this.isLoading = false;
				});
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
.recoveredCases{
  color: #03c04a;
}
.loader {
	position: absolute;
	top: 50vh;
	left: 50vw;
}
</style>
