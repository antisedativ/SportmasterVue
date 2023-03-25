//import fetchArticles from '@/services/fetchArticles'
import { canceledLoading, getArticles } from '@/services/getArticles'

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
        async getArticles(context){
            context.commit('setLoading', true)
            try {
                let body = await getArticles()
                
                context.commit('setArticles', body)
                context.commit('setError', '')
                context.commit('setLoading', false)
            } catch(err) {
                context.commit('setLoading', false)
                context.commit('setError', err.message)
                console.log(err.message)
            }
        },
        async canceledRequest(context) {
            await canceledLoading()
            context.commit('setLoading', false)
        }
    }
}

export default errorsModule