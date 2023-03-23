
const articleModule = {
    state: {
        articles: []
      },
      getters: {
        getAllArticles(state) {
            return state.articles
        },
        getAmountArticles(state) {
            return state.articles.length
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

}

export default articleModule