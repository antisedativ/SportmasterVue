import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
let controller = new AbortController();
let canceledStatus = false

export async function getArticles() {
    if(canceledStatus) {
        canceledStatus = false
        controller = new AbortController()
    }

    const data = await Vue.axios.get('http://localhost:10000/articles',{
        signal: controller.signal
    })
    .then(res => res.data)
    .catch(err => {
        throw new Error('Error ', err)
    })
    return data
}

export async function canceledLoading() {
    controller.abort()
    canceledStatus = true
}