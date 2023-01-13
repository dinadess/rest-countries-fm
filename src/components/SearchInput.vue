<template>
  <form class="group relative flex w-full md:w-96">
    <svg
      width="20"
      height="20"
      fill="currentColor"
      class="absolute left-3 top-1/2 -mt-2.5 text-dark-blue dark:text-white pointer-events-none group-focus-within:text-blue-500 z-10"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      />
    </svg>
    <input
      class="colors focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-dark-blue dark:placeholder-white rounded-md py-3 pl-12 pr-4 ring-1 ring-transparent shadow-md shadow-slate-200 dark:shadow-gray-800"
      type="search"
      v-model.trim="countryStore.searchText"
      id="search"
      name="searchInput"
      aria-label="Search for a country"
      placeholder="Search for a country..."
    />
  </form>
</template>

<script setup>
import { useCountryStore } from "@/stores/country";

const countryStore = useCountryStore();
</script>

<style></style>
