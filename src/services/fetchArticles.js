async function fetchArticles() {
    return await fetch('/data.json')
        .then(res => res.json())
        .catch(err => {
            throw new Error('Could not fetch ' + err)
        })
}

export default fetchArticles