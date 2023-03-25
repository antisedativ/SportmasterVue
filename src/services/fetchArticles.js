/* eslint-disable */
async function fetchArticles() {
    return await fetch('http://localhost:10000/articles')
        .then(res => res.json())
        .catch(err => {
            throw new Error('Could not fetch ' + err)
        })
}

// export default fetchArticles