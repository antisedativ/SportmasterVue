<template>
  <div id="app">
    <Article-form @addArticle="addArticle" />
    <ul v-if="articles.length">
      <ArticleComp
          v-for="article in articles"
          :key="article.id"
          :article="article"
          :published="article.published"
          @changePublic="changePublic"
      />
    </ul>
    <p v-else>
      No articles in the list.
    </p>
  </div>
</template>

<script>
import ArticleComp from './components/ArticleComp.vue'
import ArticleForm from './components/ArticleForm.vue'

export default {
  name: 'App',
  components: {
    ArticleComp,
    ArticleForm
  },
  data() {
    return {
      articles: []
    }
  },
  methods: {
    addArticle(article){
      let newArticle = {
        id: this.articles.length + 1,
        ...article
      }
      this.articles.push(newArticle)
    },
    changePublic(article) {
      this.articles.forEach(e => {
        if(e.id === article) 
          e.published = !e.published
      })
    }
  },
  beforeMount: function () {
    fetch('/data.json')
      .then(response => response.json())
      .then(articles => this.articles.push(...articles))
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #333;
}

#app {
  font-family: 'Montserrat', sans-serif;;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #fff;
  font-size: 25px;

}
</style>
