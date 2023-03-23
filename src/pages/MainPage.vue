<template>
	<div>
		<div v-if="getLoading"><h2>Loading...</h2></div>
		<div v-else>
			<div v-if="!getError">
				<div class="count"><span>Всего статей: {{getAmountArticles}}</span></div>
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
				<button>ПОПРОБОВАТЬ СНОВА</button>
			</div>
		</div>
	</div>
</template>

<script>
import Article from '@/components/Article.vue'
import { mapGetters} from 'vuex'
export default {
	name: 'MainPage',
	components: {
		Article
	},
	computed: {
		...mapGetters(['getAllArticles', 'getAmountArticles', 'getLoading', 'getError']),
	}
}
</script>

<style scoped>
.count {
	margin: 20px 0 0 15px;
}
</style>