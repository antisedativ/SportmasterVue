/* eslint-disable */
<template>
    <v-container class="d-flex justify-center">
        <v-card width="500px" class="justify-center">
            <v-card-title>
                <span class="headline">Add new article</span>
              </v-card-title>
            <v-form @submit.prevent="">
                <v-text-field 
                    v-model="author"
                    type="text"
                    label="Author"
                />
                <v-text-field 
                    v-model="title"
                    label="Title"
                    type="text"
                />
                <v-textarea
                    v-model="body"
                    label="Body"
                    type="text"
                    clearable 
                />
                <ButtonComp @click.native="addArticle"/>
                    
            </v-form>
        </v-card>
    </v-container>

</template>

<script>
import { Types } from '@/store/types'
export default {
    name: "ArticleForm",
    data: () => ({
        author: '',
        title: '',
        body: '',
    }),
    methods: {
        // Добавление новой статьи
        addArticle() {
            let article = {
                author: this.author,
                title: this.title,
                body: this.body,
                published: false
            }

            this.$emit('addArticle', false)
            // Вызов мутации из types.js
            this.$store.commit(Types.mutations.addArticle, article)
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
    form {
        margin: 15px;
    }
</style>