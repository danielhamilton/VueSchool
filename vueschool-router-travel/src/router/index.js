import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/brazil",
    name: "brazil",
    component: () =>
      import(/* webpackChunkName: "brazil" */ "../views/BrazilView.vue"),
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: () =>
      import(/* webpackChunkName: "hawaii" */ "../views/HawaiiView.vue"),
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () =>
      import(/* webpackChunkName: "jamaica" */ "../views/JamaicaView.vue"),
  },
  {
    path: "/panama",
    name: "panama",
    component: () =>
      import(/* webpackChunkName: "brazil" */ "../views/PanamaView.vue"),
  },
  {
    path: "/details/:id",
    name: "DestinationDetails",
    component: () =>
      import(
        /* webpackChunkName: "brazil" */ "../views/DestinationDetails.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
