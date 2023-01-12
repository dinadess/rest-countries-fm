import { createRouter, createWebHistory } from "vue-router";

import ViewCountries from "@/views/ViewCountries.vue";
import ViewCountry from "@/views/ViewCountry.vue";

// const routes = [
//   {
//     path: "/",
//     redirect: { name: "countries" },
//   },
//   {
//     path: "/rest-countries-fm/",
//     name: "countries",
//     component: ViewCountries,
//     meta: {
//       title: "Countries | Where in the world?",
//     },
//   },
//   {
//     path: "/:countryCode",
//     redirect: { name: "country" },
//   },
//   {
//     path: "/rest-countries-fm/:countryCode",
//     name: "country",
//     component: ViewCountry,
//     props: true,
//   },
// ];

const routes = [
  {
    path: "/",
    name: "countries",
    component: ViewCountries,
    meta: {
      title: "Countries | Where in the world?",
    },
  },
  {
    path: "/:countryCode",
    name: "country",
    component: ViewCountry,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes,
});

export default router;
