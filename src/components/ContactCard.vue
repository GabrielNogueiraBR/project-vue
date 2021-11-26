<template>
    <v-card>
              <v-subheader>{{title}}</v-subheader>

              <v-list>
                <template v-for="(contact,index) in contacts">
                  <v-list-item

                    :key="contact.name"
                  >
                    <v-list-item-avatar color="grey darken-1"
                    >
                      <v-img
                        :src="contact.photo"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>{{ contact.name }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-if="index != (contacts.length -1)"
                    :key="`divider-${index}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
</template>

<script>
export default {
    props: ['title','contacts']
}
</script>