<template>
  <router-link
    :to="`/${country.alpha3Code}`"
    class="inline-block hover:-translate-y-4 hover:shadow-lg hover:transition-transform w-full"
  >
    <div
      class="bg-white dark:bg-dark-blue text-dark-blue-light dark:text-white rounded overflow-hidden w-full shadow-md country-card"
    >
      <div class="w-full h-[200px] relative">
        <img
          :src="`${country.flags.svg}`"
          :alt="`${country.name}'s flag`"
          class="w-full h-full object-cover object-top shadow-sm flag"
        />
      </div>
      <div class="card-content pt-[20px] pb-[32px] px-[24px]">
        <h2
          class="font-bold mb-[18px] overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {{ country.name }}
        </h2>
        <div class="card-country-info">
          <p>
            <strong class="font-semibold">Population: </strong
            >{{ new Intl.NumberFormat("en-US").format(country.population) }}
          </p>
          <p>
            <strong class="font-semibold"> Region: </strong>
            {{ country.region }}
          </p>
          <p>
            <strong class="font-semibold">Capital:</strong>
            {{ country.capital ?? "None" }}
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
