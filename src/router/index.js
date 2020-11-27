import Vue from "vue";
import VueRouter from "vue-router";
const LandingPage = () => import('../views/LandingPage.vue');
const AllData = () => import('../views/AllData.vue');
const Statewise = () => import('../views/Statewise.vue');

Vue.use(VueRouter);

const routes = [
	{
      path: '/',
			name: "LandingPage",
      component: LandingPage,
      children: [
        {
          title: 'AllData',
          path: '/',
          name: 'AllData',
          component: AllData
        },
				{
          title: 'Statewise',
          path: '/state-wise',
          name: 'Statewise',
          component: Statewise
        },
      ]
    }
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
