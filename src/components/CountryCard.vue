<template>
  <router-link
    :to="`/${country.cca3}`"
    class="inline-block hover:-translate-y-4 hover:shadow-lg hover:transition-transform w-full"
  >
    <div
      class="bg-white dark:bg-dark-blue text-dark-blue-light dark:text-white rounded overflow-hidden w-full shadow-md country-card"
    >
      <div class="w-full h-[200px]">
        <img
          :src="`${country.flags.svg}`"
          :alt="`${country.name.common}'s flag`"
          class="w-full h-full object-cover object-top shadow-sm flag"
        />
      </div>
      <div class="card-content pt-[20px] pb-[32px] px-[24px]">
        <h2
          class="font-bold mb-[18px] overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {{ country.name.common }}
        </h2>
        <div class="card-country-info">
          <p>
            <strong class="font-semibold">Population: </strong
            >{{ new Intl.NumberFormat("en-US").format(country.population) }}
          </p>
          <p>
            <strong class="font-semibold"> Region: </strong>
            {{ country.continents[0] }}
          </p>
          <p>
            <strong class="font-semibold">Capital:</strong>
            {{ country.capital?.[0] }}
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps(["country"]);
</script>

<style scoped>
.card-country-info p {
  margin-bottom: 7px;
}
</style>
