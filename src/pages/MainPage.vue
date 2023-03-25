<template>
	<div>
		<div v-if="getLoading" class="loader">
			<Loader />
			<button class="btn btn-loader" @click="canceledRequest">Отмена</button>
		</div>
		<div v-else>
			<div v-if="!getError">
				<div class="header">
					<div>Всего статей: {{getAmountArticles}}</div>
					<button class="btn" @click="getArticles">
						Обновить
					</button>
				</div>
				<ul v-if="getAllArticles">
					<Article
						v-for="article in getAllArticles"
						:key="article.id"
						:id="article.id"
						:author="article.author"
						:title="article.title"
						:body="article.body"
						:published="article.published"
					/>
				</ul>
				<p v-else>
					No articles in the list.
				</p>
			</div>
			<div v-else>
				<button class="btn btn-loader" @click="getArticles">
					ПОПРОБОВАТЬ СНОВА
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import Article from '@/components/Article.vue'
import Loader from '@/UI/LoaderComp.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
	name: 'MainPage',
	components: {
		Article,
		Loader
	},
	methods:{
		...mapActions(['getArticles', 'canceledRequest'])
	},
	computed: {
		
		...mapGetters(['getAllArticles', 'getAmountArticles', 'getLoading', 'getError']),
	}
}
</script>

<style scoped>
.header {
	margin: 20px 0 0 15px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.btn{
	margin-right: 20px;
	width: 120px;
	height: 35px;
	background-color: #989da0;
	color: #fff;
	border-color: #c8dff2;
	border-radius: 15px;
	cursor: pointer;
}

.loader{
	margin-top: 50px;
	display: flex;
	flex-direction: column;

}

.btn-loader {
	margin: 50px 0;
}
</style>