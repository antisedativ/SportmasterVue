import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: []
  },
  getters: {
    getAllArticles(state) {
        return state.articles
    }
  },
  mutations: {
    changePublic(state, articleId) {
        state.articles.forEach(e => {
            if (e.id === articleId)
                e.published = !e.published
        })
    },
    addArticle(state, article) {
        let newArticle = {
            id: state.articles.length + 1,
            ...article
        }
        state.articles.push(newArticle)
    },
    setArticles(state, articles) {
        state.articles = articles
    }
  },
  actions: {
    fetchArticles(context) {
        fetch('/data.json')
			.then(response => response.json())
			.then(articles => context.commit('setArticles', articles))
    }
  }
})
