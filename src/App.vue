<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
      >
        <v-list v-model="user">
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img :src="user.picture"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{user.name}}
              </v-list-item-title>
              <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item 
            v-for= "item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>mdi-{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
          
        </v-list>
      </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      user: {
        name: 'Satoro Gojo',
        email: 'satoro_gojo@jujutsu.kaisen.com',
        picture: 'profile.jpg'
      },
      items: [
        {
          title: 'Home',
          icon: 'home',
          path: '/'
        },
        {
          title: 'About',
          icon: 'information-variant',
          path: '/about'
        }
      ]
    }),
  }
</script>