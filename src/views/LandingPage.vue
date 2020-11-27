<template>
	<div>
		<v-app-bar color="yellow accent-4" dense dark>
			<v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
			<v-toolbar-title class="nav-heading">Covid Tracker</v-toolbar-title>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" absolute temporary>
			<v-list nav dense>
				<v-list-item-group
					v-model="group"
					active-class="deep-purple--text text--accent-4"
				>
					<v-list-item @click="drawer = false">
						<v-list-item-icon>
							<v-icon>mdi-home</v-icon>
						</v-list-item-icon>
						<v-list-item-title
							><router-link to="/">
								Home
							</router-link></v-list-item-title
						>
					</v-list-item>
					<v-list-item @click="drawer = false">
						<v-list-item-icon>
							<v-icon>mdi-map-marker-radius</v-icon>
						</v-list-item-icon>
						<v-list-item-title>
							<router-link to="/state-wise">
								State wise
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
			drawer: false
		};
	},
	mounted() {
	},

	methods: {
	
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
</style>
