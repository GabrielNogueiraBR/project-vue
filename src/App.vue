<template>
  <v-app id="inspire">
    <v-system-bar color="primary" dark>
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>20:30</span>
    </v-system-bar>

    <app-bar 
      :title="myApplicationTitle" 
      :drawer="drawer" 
      @changeDrawer="changeDrawer($event)" 
      :menuItems="menuItems"
    ></app-bar>

    <navigation-drawer 
      :drawer="drawer"
      :user="user"
      :menuItems="menuItems"
    ></navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Gabriel Nogueira</strong>
      </v-col>
    </v-footer>

  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar"
import NavigationDrawer from '@/components/NavigationDrawer'

export default {
  data: () => ({
    drawer: true,
    user: {
      name: "Satoro Gojo",
      email: "satoro_gojo@jujutsu.kaisen.com",
      picture: "profile.jpg",
    },
  }),
  computed: {
    myApplicationTitle(){
      return this.$store.getters.bigTitle
    },
    menuItems(){
      return this.$store.getters.getMenuItems
    }
  },
  components:{
    AppBar,
    NavigationDrawer
  },
  methods:{
    changeDrawer: function(newValue){
      this.drawer = newValue;
    }
  }
};
</script>