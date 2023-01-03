<template>
  <div class="flex justify-between flex-wrap py-[50px]">
    <SearchInput></SearchInput>
    <FilterForm></FilterForm>
  </div>
  <div v-if="countryStore.loading" class="extra-text">
    <TheSpinner></TheSpinner>
  </div>
  <div v-if="countryStore.errorMessage" class="extra-text">
    <p class="text-lg mx-auto text-dark-blue-dark dark:text-white">
      {{ countryStore.errorMessage }}
    </p>
  </div>
  <CountryList></CountryList>
</template>

<script setup>
/** imports */

import TheSpinner from "@/components/TheSpinner.vue";
import FilterForm from "@/components/FilterForm.vue";
import CountryList from "@/components/CountryList.vue";
import SearchInput from "@/components/SearchInput.vue";

/** import store */
import { useCountryStore } from "@/stores/country";

import { onMounted } from "vue";
const countryStore = useCountryStore();

onMounted(() => {
  countryStore.fetchCountries();
});
</script>

<style></style>
