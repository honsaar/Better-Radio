<script setup>

import './index.css'


</script>

<template>
<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/pod/123">About</router-link>
  </div>
  <Suspense>
  <router-view/>
  </Suspense>
</template>

<style>

</style>
