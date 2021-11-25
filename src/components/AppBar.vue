<template>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="changeDrawer()"></v-app-bar-nav-icon>
      <v-toolbar
        flat
        tile>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          link
        >
          <v-btn icon>
            <v-icon>mdi-{{item.icon}}</v-icon>
          </v-btn>
        </v-toolbar-items>
       
      </v-toolbar>
    </v-app-bar>
</template>

<script>
export default {
    props:['title','drawer','menuItems'],
    methods:{
      changeDrawer: function(){
        this.$emit('changeDrawer',!this.drawer);
      }
    }
}
</script>