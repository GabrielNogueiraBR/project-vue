<template>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="changeDrawer()"></v-app-bar-nav-icon>

      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-app-bar>
</template>

<script>
export default {
    props:['title','drawer'],
    methods:{
      changeDrawer: function(){
        this.$emit('changeDrawer',!this.drawer);
      }
    }
}
</script>