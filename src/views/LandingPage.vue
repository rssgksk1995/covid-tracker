<template>
	<div>
		<v-app-bar color="yellow accent-4" dense dark>
			<v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
			<v-toolbar-title class="nav-heading">Covid Tracker</v-toolbar-title>
		</v-app-bar>
		<v-navigation-drawer
			v-model="drawer"
			absolute
			temporary
			class="black accent-4"
		>
			<v-list nav dense>
				<v-list-item-group
					v-model="group"
					active-class="deep-purple--text text--accent-4"
				>
					<v-list-item @click="drawer = false">
						<img src="../assets/home.svg" alt='' />
						<v-list-item-title
							><router-link to="/" class="nav-text-link">
								<div class="nav-text">Home</div>
							</router-link></v-list-item-title
						>
					</v-list-item>
					<hr class="horzentalRow"/>
					<v-list-item @click="drawer = false">
						<img src="../assets/trello.svg" alt='' />
						<v-list-item-title>
							<router-link to="/state-wise" class="nav-text-link">
								<div class="nav-text">State wise</div>
							</router-link>
						</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
		<router-view />
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
			group: '',
		};
	},
	mounted() {},

	methods: {}
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
.nav-text {
	color: white;
	margin-left: 10px;
}
.nav-text-link {
	text-decoration: none;
}
.horzentalRow{
	border-bottom: 0px;
    border-top: 1px solid #f5ad26;
    margin: 5px -11px;
}
</style>
