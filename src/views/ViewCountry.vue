<template>
  <div v-if="error" class="extra-text">
    <p
      class="text-xl mx-auto text-center font-semibold text-dark-blue-dark dark:text-white"
    >
      {{ error }}
    </p>
  </div>
  <div v-else class="pt-14 md:pt-16 lg:pt-20 country">
    <button
      @click="goBack"
      class="colors py-2 px-10 shadow-lg rounded mb-14 md:mb-16 lg:mb-20"
    >
      <span class="mr-1">&leftarrow;</span> Back
    </button>
    <div class="text-dark-blue-dark dark:text-white country-details">
      <div class="flex-shrink-0">
        <img
          :src="`${country?.flags.svg}`"
          :alt="`${country.name.common}'s flag`"
          class="w-full shadow object-cover object-top country-flag"
        />
      </div>
      <div>
        <h2 class="text-base md:text-3xl font-bold mb-6">
          {{ country.name.common }}
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p><strong>Native Name: </strong>{{ country.altSpellings[1] }}</p>
            <p>
              <strong>Population: </strong
              >{{ new Intl.NumberFormat("en-US").format(country.population) }}
            </p>
            <p>
              <strong>Region: </strong
              >{{ country.region ? country.region : "None" }}
            </p>
            <p>
              <strong>Sub Region: </strong>
              {{ country.subregion ? country.subregion : "None" }}
            </p>
            <p>
              <strong>Capital: </strong>
              <span>{{
                country.capital ? country.capital?.join(", ") : "None"
              }}</span>
            </p>
          </div>
          <div class="">
            <p><strong>Top Level Domain: </strong>{{ country.tld?.[0] }}</p>
            <p>
              <strong>Currencies: </strong
              >{{
                country.currencies
                  ? countryStore.getValues(country.currencies)[0]?.name
                  : "None"
              }}
            </p>
            <p>
              <strong>Language(s): </strong>
              <span>
                {{
                  country.languages
                    ? countryStore.getValues(country.languages).join(", ")
                    : "None"
                }}
              </span>
            </p>
          </div>
        </div>
        <div
          class="flex flex-col xl:flex-row gap-3 md:gap-1 xl:items-baseline mt-10"
        >
          <strong class="flex-shrink-0">Border Countries: </strong>
          <ul v-if="country.borders" class="flex flex-wrap gap-2">
            <li v-for="country in country.borders" :key="country">
              <router-link
                :to="`/${country}`"
                class="colors py-2 px-6 inline-block rounded shadow-md"
              >
                {{ countryStore.getCountryName(country) }}
              </router-link>
            </li>
          </ul>
          <span v-else>None</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useCountryStore } from "@/stores/country";
import { ref, onMounted } from "@vue/runtime-core";
import { gsap } from "gsap";

const countryStore = useCountryStore();

const route = useRoute();
const router = useRouter();

const goBack = function () {
  router.back();
};

onMounted(() => {
  const tl = gsap.timeline();

  tl.to("p", { autoAlpha: 1, y: 0, stagger: 0.1 }).to(
    ".country-flag",
    {
      scale: 1,
    },
    "<"
  );
});

const country = ref(
  JSON.parse(
    JSON.stringify(countryStore.getCountry(route.params.countryCode))
  )[0]
);

let error = "";

if (!country.value) {
  error = "¯\\_(ツ)_/¯ No such country found! Please try again.";
}
console.log(error);
console.log(country.value);

console.log(route.params.countryCode);
</script>

<style scoped>
.country-flag {
  transform: scale(0.8);
}

p {
  transform: translateY(20px);
  visibility: hidden;
  opacity: 0;
}

strong {
  font-weight: 600;
}

.country-details {
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
}

@media screen and (min-width: 48rem) {
  .country-details {
    grid-template-columns: 3.9fr 4fr;
    gap: 40px;
  }
}

@media screen and (min-width: 80rem) {
  .country-details {
    gap: 100px;
    align-items: center;
  }
}

.country-details p {
  margin-bottom: 0.5rem;
}

img.country-flag {
  aspect-ratio: 3/2;
}
</style>