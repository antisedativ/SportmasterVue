<template>
	<v-main class="justify-content">
		<div v-if="getLoading" class="loader">
			<v-progress-circular
			:size="70"
			:width="7"
			color="purple"
			indeterminate />
			<v-btn color="primary" class="btn-loader" @click="canceledRequest">Отмена</v-btn>
		</div>
		<div v-else>
			<div v-if="!getError">
				<v-col cols="8" class="header">
					<div>Всего статей: {{getAmountArticles}}</div>
					<div class="btns">
						<Modal/>
						<!-- <v-btn color="primary" @click="getArticles">
							Обновить
						</v-btn> -->
					</div>
				</v-col>
				<div v-if="getAllArticles">
					<Article
						v-for="article in getAllArticles"
						:key="article.id"
						:id="article.id"
						:author="article.author"
						:title="article.title"
						:body="article.body"
						:published="article.published"
					/>
				</div>
				<p v-else>
					No articles in the list.
				</p>
			</div>
			<div v-else>
				<v-btn color="primary" class="btn-loader" @click="getArticles">
					ПОПРОБОВАТЬ СНОВА
				</v-btn>
			</div>
		</div>
	</v-main>
</template>

<script>
import Article from '@/components/Article.vue'
import Modal from '@/components/Modal.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
	name: 'MainPage',
	components: {
		Article,
		Modal
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


.loader{
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	width: 200px;
}

.btn-loader {
	margin: 50px 0;
}

.cont {
	display: flex;
	justify-content: center;
	flex-direction: column;
}


</style>