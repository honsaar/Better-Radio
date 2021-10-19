<script setup>
import { ref } from "vue";

// search bar biz here


const post = await fetch(`https://itunes.apple.com/search?term=penumbra&entity=podcast&limit=5`).then(r => r.json())

console.log(post.results);



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
  <p>Home!</p>
  <div class="podcast" v-for="pod in post.results" v-bind:key="pod.collectionId">

    <img :src="pod.artworkUrl100">
    <p class="title">{{ pod.collectionName }} </p>
    <p class="subtitle">{{ pod.artistName }} </p>


  </div>
</template>

<style>

  .title {
    font-weight: 700;
  }

  .subtitle {
    color: #aaa;
    margin-top:-1em;
  }

  .podcast {
    margin: 2em;
    margin-bottom: 5em;
    border: 1px solid #aaa;
    padding: 1em;
  }

</style>
