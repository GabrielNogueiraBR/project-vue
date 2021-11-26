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
    data: () => ({
        contacts : [
            {
                category: 'Best Friends',
                users: [
                    {name: 'Yuji Itadori', photo: './photos/yuji-itadori.jpg'},
                ]
            },
            {
                category: 'Friends',
                users: [
                    {name: 'Suguru Geto', photo: './photos/suguru-geto.jpg'},
                ]
            },
        ],
    }),
    components: {
        ContactCard,
    }
}
</script>