/* eslint-disable */
const store = {
    state: {
        articles: [
            {
                "id": 1,
                "author": "John",
                "title": "Title 1",
                "body": "Lean Vue",
                "published": true
            },
            {
                "id": 2,
                "author": "Bob",
                "title": "Title 2",
                "body": "Lean Vue",
                "published": false
            },
            {
                "id": 3,
                "author": "Artur",
                "title": "Title 3",
                "body": "Lean Vue",
                "published": false
            },
            {
                "id": 4,
                "author": "gleb2",
                "title": "Title 4",
                "body": "Lean Vue",
                "published": true
            }
        ],
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