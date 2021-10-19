<script setup>
import podcastItem from "./podcastItem.vue";

</script>

<template>
  <podcastItem :podID="$route.params.id"></podcastItem>
</template>

<style>

</style>
