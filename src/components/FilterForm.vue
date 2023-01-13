<template>
  <select
    aria-label="Filter By Region"
    v-model="countryStore.region"
    name="filter"
    id="filter"
    class="colors font-semibold rounded shadow-md py-2 px-4 cursor-pointer mt-8 md:mt-0"
  >
    <option disabled value="">Filter by Region</option>
    <option value="all">All</option>
    <option value="africa">Africa</option>
    <option value="americas">Americas</option>
    <option value="asia">Asia</option>
    <option value="europe">Europe</option>
    <option value="oceania">Oceania</option>
  </select>
</template>

<script setup>
import { useCountryStore } from "@/stores/country";

const countryStore = useCountryStore();

// countryStore.filterByRegion(filterRegion);
</script>

<style></style>
