<template>
  <TheHeader></TheHeader>
  <main class="container mb-8" data-barba="container">
    <router-view :key="$route.path"></router-view>
  </main>
  <footer class="mt-auto">
    <p class="text-center px-2 text-dark-blue dark:text-light-gray">
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        class="underline"
        >Frontend Mentor</a
      >. Coded by
      <a
        href="https://www.frontendmentor.io/profile/dinadess"
        target="_blank"
        class="underline"
        >Oshyeld</a
      >.
    </p>
  </footer>
</template>

<script setup>
/** imports */
import TheHeader from "@/components/TheHeader.vue";
</script>

<style>
header {
  line-height: 1.5;
}
</style>
