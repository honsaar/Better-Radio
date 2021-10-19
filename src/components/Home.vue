<script setup>
import podcastItem from "./podcastItem.vue";

// search bar biz here

const post = await fetch(
  `https://itunes.apple.com/search?term=penumbra&entity=podcast&limit=5`
).then((r) => r.json());

console.log(post.results);

</script>

<template>
  <p>Home!</p>

  <div class="container">
    <div
      class="podcast"
      v-for="pod in post.results"
      v-bind:key="pod.collectionId"
    >
      <router-link :to="'/pod/' + pod.collectionId">
        <img :src="pod.artworkUrl600" style="width: 100%" />
        <p class="title">{{ pod.collectionName }}</p>
        <p class="subtitle">{{ pod.artistName }}</p>
      </router-link>
    </div>
  </div>
</template>

<style>

</style>
