import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store.js";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: true,
  },

  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails.vue"
      ),
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "ExperienceDetails" */ "../views/ExperienceDetails.vue"
          ),
      },
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        (destination) => destination.slug === to.params.slug
      );
      if (exists) {
        next();
      } else {
        next({ name: "notFound" });
      }
    },
  },

  {
    path: "/user",
    name: "user",
    component: () =>
      import(/*webpackChunkName: "User"*/ "../views/UserMain.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/*webpackChunkName: "Login" */ "../views/LoginPage.vue"),
  },

  {
    path: "/404",
    alias: "/*",
    name: "notFound",
    component: () =>
      import(
        /* webpackChunkName: "NotFound" */
        "../views/NotFound.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (to.hash === "#experience") {
          position.offset = { y: 140 };
        }
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false;
      }
    }
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.user) {
      next({
        name: "login",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
