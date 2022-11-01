import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

// nested-routes : layout component + children component
// https://router.vuejs.org/guide/essentials/nested-routes.html
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        meta: {
          title: "Home",
        },
        // route level code-splitting
        // this generates a separate chunk (home.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/HomeView.vue"),
      },
      {
        path: "about",
        name: "about",
        meta: {
          title: "about",
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
      },
      {
        path: "components",
        name: "components",
        meta: {
          title: "components",
        },
        component: () =>
          import(/* webpackChunkName: "Components" */ "@/views/Components.vue"),
      },
      {
        path: "components/:id/:subId",
        name: "components-detail",
        meta: {
          title: "components detail",
        },
        component: () =>
          import(
            /* webpackChunkName: "Components-detail" */ "@/views/Components.vue"
          ),
      },
      {
        path: "library",
        name: "library",
        meta: {
          title: "library",
        },
        component: () =>
          import(/* webpackChunkName: "library" */ "@/views/Library.vue"),
      },
      {
        path: "library/:id/:subId",
        name: "library-detail",
        meta: {
          title: "library detail",
        },
        component: () =>
          import(
            /* webpackChunkName: "library-detail" */ "@/views/Library.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
