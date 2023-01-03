<template>
  <ul
    v-if="countryStore.countries.length"
    ref="countries"
    class="flex justify-start gap-[40px] flex-wrap"
  >
    <li
      v-for="country in countryStore.searchCountry"
      :key="country.cca2"
      class="w-full md:w-[45%] lg:w-[30%] xl:w-[22.5%]"
    >
      <CountryCard :country="country"></CountryCard>
    </li>
  </ul>
</template>

<script setup>
import { onMounted } from "vue";
import CountryCard from "./CountryCard.vue";
import { useCountryStore } from "@/stores/country";

const countryStore = useCountryStore();
import { useAutoAnimate } from "@formkit/auto-animate/vue";

const [countries] = useAutoAnimate();
</script>

<style></style>
