<script setup>

const props = defineProps({
  podID: String,
});

console.log(props.podID);

const post = await fetch(
  `https://itunes.apple.com/search?term=` +
    props.podID +
    `&entity=podcast&limit=5`
).then((r) => r.json());

var choice = post.results;
console.log(choice[0].feedUrl);

const deets = await fetch(choice[0].feedUrl).then((r) => r.text());

const parser = new DOMParser();
const xml = parser.parseFromString(deets, "application/xml");
console.log(xml);

var title = xml.getElementsByTagName("title")[0].childNodes[0].nodeValue;

var description = xml.getElementsByTagName("description")[0].childNodes[0].nodeValue;

var image = xml.getElementsByTagName("image")[0].getElementsByTagName("url")[0].childNodes[0].nodeValue;


var author = xml.getElementsByTagName("itunes:author")[0].childNodes[0].nodeValue;

var lastDate = xml.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
lastDate = lastDate.slice(0, -15);


// list of episodes
var getEps = xml.getElementsByTagName("item");
var episodes = [];

for(var i = 0; i < getEps.length; i++){

  let newEp = {};
  newEp.title = getEps[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
  newEp.descriptHTML = getEps[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
  newEp.pubDate = getEps[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
  newEp.pubDate = newEp.pubDate.slice(0, -15);
  newEp.enclosure = getEps[i].getElementsByTagName("enclosure")[0];



  episodes.push(newEp);
}





</script>

<template>
  <!-- <p style="text-align: center;"><img :src="image" style="width: 100%; max-width: 600px; margin-left: auto;"></p> -->
  <p class="title">{{ title }}</p>
  <p class="subtitle">{{ author }}</p>
  <p>{{ description }}</p>
  <p>{{ lastDate }}</p>


  <div class="episode" v-for="ep in episodes" v-bind:key="ep">
    <!-- <div class='epImg'>
      <img :src="image" style="width: 100%; max-width: 200px;">
    </div> -->
    <div class='epInfo'>
    <p class="title">{{ ep.title }} </p>
    <!-- <div class="subtitle" v-html="ep.descriptHTML"></div> -->
    </div>
  </div>

</template>

<style>
</style>
