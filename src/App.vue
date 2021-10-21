<script setup>
import "./index.css";
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/pod/123">About</router-link>
  </div>
  <div class="contain">
    <Suspense>
      <router-view :key="$route.path" />
    </Suspense>

    <!-- new component for floating media player -->
  </div>
</template>

<style>
</style>
