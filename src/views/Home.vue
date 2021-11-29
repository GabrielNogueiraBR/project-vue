<template>
  <v-container>
    <v-row class="text-center">
      <v-col
        v-for="episode in episodes"
        :key="episode.id"
        cols="4"
      >
        <episode-card :information="episode" ></episode-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import EpisodeCard from "@/components/EpisodeCard"

export default {
  components:{
    EpisodeCard
  },
  computed:{
    episodes(){
      return this.$store.getters.allEpisodes
    }
  },
  created(){
    if(this.$store.getters.allEpisodes === null)
      this.$store.dispatch("fetchEpisodes");
  }
}
</script>