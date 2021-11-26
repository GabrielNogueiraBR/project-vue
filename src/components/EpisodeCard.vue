<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="information.img"
    >
      <v-card-title>{{information.title}}</v-card-title>
    </v-img>

    <v-card-actions>
      <v-btn
        text
      >
        WATCH
      </v-btn>

      <v-btn
        text
      >
        DOWNLOAD
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: ['information']
}
</script>