<template>
    <v-container>
        <v-row>
            <v-col
                v-for="contact in contacts"
                :key="contact.category"
                cols="12"
            >
                <contact-card :title="contact.category" :contacts="contact.users"></contact-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import ContactCard from "@/components/ContactCard"

export default {
    components: {
        ContactCard,
    },
    computed:{
        contacts(){
            return this.$store.getters.getContactsByCategory;
        },
    },
    created(){
        if(this.$store.getters.allContacts === null)
           this.$store.dispatch("fetchContacts");
    }
}
</script>