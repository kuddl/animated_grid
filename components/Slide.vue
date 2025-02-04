<template>
  <div class="slide">
    <!-- <nuxt-img :src="imageSrc" /> -->
    <NuxtImg :src="imageSrc" width="630" />
    <a href="#"> View case <ArrowRight /> </a>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  imageSrc: string;
}>();
</script>
