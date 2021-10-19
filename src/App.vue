<script setup>

import './index.css'

//  var list = $("#list");
//     $.get("https://itunes.apple.com/search?term=penumbra&entity=podcast&limit=5", function(res){
//      var thing = $.parseJSON(res).results;

//     for(var i = 0; i < thing.length; i++){
//         console.log(thing[i].collectionName, "by", thing[i].artistName);
//         console.log(thing[i]);
//         $.get(thing[i].feedUrl, function(data){
//             console.log(data);
//         });

//         var newDiv = "<div class='pod'><img src='" + thing[i].artworkUrl100 + "'><h5 id='title'>" + thing[i].collectionName + "</h5><p id='author'>" + thing[i].artistName + "</div>";
//         list.append(newDiv);
//     }

</script>

<template>
<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/pod/123">About</router-link>
  </div>
  <router-view/>
</template>

<style>

</style>
