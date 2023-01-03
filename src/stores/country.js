import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useCountryStore = defineStore("country", {
  state: () => {
    return {
      darkMode: "true",
      countries: useStorage("countries", []),
      loading: false,
      errorMessage: "",
      region: "all",
      searchText: "",
      currentCountry: useStorage("currentCountry", {}),
    };
  },

  getters: {
    filterByRegion() {
      if (this.region === "all" || this.region === "") {
        this.errorMessage = "";
        return this.countries;
      }
      if (
        this.region === "africa" ||
        this.region === "americas" ||
        this.region === "asia" ||
        this.region === "europe" ||
        this.region === "oceania"
      ) {
        this.errorMessage = "";
        return this.countries.filter(
          (country) => country.region.toLowerCase() === this.region
        );
      }
      this.errorMessage =
        "¯\\_(ツ)_/¯ No such country found! Please try again.";
    },
    searchCountry() {
      if (this.searchText) {
        this.errorMessage = "";
        let search = this.filterByRegion?.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(this.searchText.toLowerCase())
        );
        if (!search.length) {
          this.errorMessage =
            "¯\\_(ツ)_/¯ No such country found! Please try again.";
        }
        return search;
      } else {
        this.errorMessage = "";
        return this.filterByRegion;
      }
    },
    getValues() {
      //Get the value(s) of an object without knowing its key name
      return (object) => {
        if (!object) return;

        return Object.values(object);
      };
    },
    getCountry(state) {
      return (countryCode) => {
        const country = state.countries.filter(
          (country) => country.cca3 === countryCode
        );
        return country;
      };
    },
    getCountryName(state) {
      return (countryCca3) => {
        const country = state.countries.filter(
          (country) => country.cca3 === countryCca3
        );
        return country?.[0].name.common;
      };
    },
  },
  actions: {
    async fetchCountries() {
      try {
        this.loading = true;
        console.log(this.loading);
        if (!this.countries.length) {
          const response = await fetch("https://restcountries.com/v3.1/all");
          const data = await response.json();
          if (!response.ok) {
            throw new Error(
              `¯\\_(ツ)_/¯ ${data.message} (Error ${response.status})`
            );
          }
          this.countries = data;
        } else {
          this.countries = JSON.parse(localStorage.countries);
        }
        this.loading = false;
        console.log(this.loading);
      } catch (err) {
        this.loading = false;
        this.errorMessage = err.message;
        console.error(err.message);
      }
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
});
