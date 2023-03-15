<template>
	<div>
		<ul v-if="articles">
			<ArticleComp
				v-for="article in articles"
				:key="article.id"
				:article="article"
				:published="article.published"
			/>
		</ul>
		<p v-else>
			No articles in the list.
		</p>
	</div>
</template>

<script>
import ArticleComp from '@/components/Article.vue'
export default {
	name: 'MainPage',
	components: {
		ArticleComp
	},
	data() {
		return {
			articles: this.$root.$data.articles,
		}
	}
}
</script>

<style scoped>

</style>