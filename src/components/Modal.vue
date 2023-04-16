<template>
    <v-row>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Add article
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Modal</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row> 
                <ArticleForm @addArticle="addArticle"/>
              </v-row>
            </v-container>
            <small>*adding new articles</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>
  
  <script>
  import ArticleForm from '@/components/ArticleForm.vue'
    export default {
      name: 'ModalComp',
      components: {ArticleForm},
      data: () => ({
        dialog: false,
      }),
      methods: {
        addArticle(status) {
          console.log('sdad')
          this.dialog = status
        }
      }
    }
  </script>