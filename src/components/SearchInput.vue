<template>
  <div class="colors shadow-md rounded px-5 w-full md:w-96 flex items-center">
    <label for="search" class="flex mr-3">
      <!-- <ion-icon size="small" name="search-sharp"></ion-icon> -->
    </label>
    <input
      v-model.trim="countryStore.searchText"
      type="search"
      id="search"
      name="searchInput"
      placeholder="Search for a country..."
      class="colors font-semibold w-full p-3"
    />
  </div>
</template>

<script setup>
import { useCountryStore } from "@/stores/country";

const countryStore = useCountryStore();
</script>

<style></style>
