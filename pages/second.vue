<template>
  <div>
    <p>Second Page</p>
    <nuxt-link to="/">First</nuxt-link>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { onMounted, onUnmounted } from "vue";
import { fadeIn, fadeOut } from "~/utils/animations"



definePageMeta({
  pageTransition: {
    mode: "default",
    appear: true,
  },
});

onMounted(() => {
  fadeIn()
  console.log("going in");
});

onUnmounted(() => {
  console.log("going out");
});
</script>

<style scoped>
</style>