/* eslint-disable */
<template>
  <form @submit.prevent="">
    <div>
        <label for="">Author:</label>
        <input 
            v-model="author"
            placeholder="Author name..."
            type="text"
        />
    </div>
    <div>
        <label for="">Title:</label>
        <input 
            required
            v-model="title"
            placeholder="Title..."
            type="text"
        />
    </div>
    <div>
        <label for="">Description:</label>
        <input 
            v-model="body"
            placeholder="Description..."
            type="text"
        />
    </div>
    <ButtonComp @click.native="addArticle"/>
  </form>
</template>

<script>
import { Types } from '@/store/types'
export default {
    name: "ArticleForm",
    data: () => ({
        author: '',
        title: '',
        body: ''
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
            // Вызов мутации из types.js
            this.$store.commit(Types.mutations.changePublic, article)
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
    form {
        margin: 50px 0;
    }

    label {
        margin-right: 20px;
    }

    input {
        height: 40px;
        width: 410px;
        background-color: rgb(228, 236, 243);
        padding-left: 5px;
        color: #000;
        font-size: 20px;
    }

    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
</style>