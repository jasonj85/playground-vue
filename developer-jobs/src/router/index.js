import { createRouter, createWebHashHistory } from "vue-router";

const HomeView = () =>
  import(/* webpackChunkName: "Home" */ "@/views/HomeView.vue");
const JobListingsView = () =>
  import(/* webpackChunkName: "Jobs" */ "@/views/JobListingsView.vue");
const JobView = () =>
  import(/* webpackChunkName: "Jobs" */ "@/views/JobView.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobListings",
    component: JobListingsView,
  },
  {
    path: "/jobs/results/:id",
    name: "JobView",
    component: JobView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
