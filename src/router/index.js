import { createRouter, createWebHistory } from "vue-router";

import ViewCountries from "@/views/ViewCountries.vue";
import ViewCountry from "@/views/ViewCountry.vue";

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
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
