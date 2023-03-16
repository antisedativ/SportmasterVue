/* eslint-disable */
const store = {
    state: {
        articles: [],
    },
    changePublic(article) {
        this.state.articles.forEach(e => {
            if (e.id === article)
                e.published = !e.published
        })
    },
    addArticle(article) {
        let newArticle = {
            id: this.state.articles.length + 1,
            ...article
        }
        this.state.articles.push(newArticle)
    }
}

export default store