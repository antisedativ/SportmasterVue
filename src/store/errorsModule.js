import fetchArticles from '@/services/fetchArticles'

const errorsModule = {
    state: {
        loading: false,
        error: ""
    },
    getters:{
        getError(state) {
            return state.error
        },
        getLoading(state){
            return state.loading
        }
    },
    mutations: {
        setError(state, status) {
            state.error = status
        },
        setLoading(state, status) {
            state.loading = status
        }
    },
    actions: {
        async fetchArticles(context) {
            context.commit('setLoading', true)
            try {
                let body = await fetchArticles()
                context.commit('setArticles', body)
                context.commit('setError', '')
                context.commit('setLoading', false)
            } catch(err) {
                context.commit('setLoading', false)
                context.commit('setError', err.message)
                console.log(err.message)
            }
        }
      }
}

export default errorsModule