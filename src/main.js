import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router/index";

import "./assets/main.css";

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);

if (
  localStorage.getItem("theme") === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  localStorage.theme = "dark";
  document.documentElement.classList.add("dark");
} else {
  localStorage.theme = "light";
  document.documentElement.classList.remove("dark");
}

app.use(router).mount("#app");
