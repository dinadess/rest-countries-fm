<template>
  <header class="colors shadow-md">
    <div class="container py-6 flex justify-between items-center flex-wrap">
      <router-link to="/">
        <h1 class="font-bold text-sm md:text-2xl">Where in the world</h1>
      </router-link>
      <button
        class="font-semibold text-sm md:text-base flex items-center gap-1 py-1 px-2 rounded active:shadow-md"
        @click="toggleDarkMode"
      >
        <div class="flex gap-1">
          <ion-icon name="moon" v-if="countryStore.darkMode"></ion-icon>
          <ion-icon name="moon-outline" v-else></ion-icon>
        </div>
        Dark Mode
      </button>
    </div>
  </header>
</template>

<script setup>
/** imports */
import { useCountryStore } from "@/stores/country";
import { onMounted } from "vue";

const countryStore = useCountryStore();

const toggleDarkMode = function () {
  countryStore.toggleDarkMode();

  if (countryStore.darkMode) {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  } else {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  }
};
</script>

<style scoped></style>
