<template>
  <div class="loader bg-dark-blue dark:bg-white mx-auto"></div>
</template>

<script setup></script>

<style scoped>
.loader {
  width: 25px;
  height: 25px;
  display: inline-block;
  border-radius: 50%;
  animation: spinner 0.9s ease-in-out infinite alternate;
}

@keyframes spinner {
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(2);
    opacity: 0.5;
  }
}
</style>
