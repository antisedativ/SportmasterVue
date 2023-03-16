<template>
	<div>
		<ul v-if="this.$root.$data.articles">
			<Article
				v-for="article in this.$root.$data.articles"
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
</template>

<script>
import Article from '@/components/Article.vue'
export default {
	name: 'MainPage',
	components: {
		Article
	}
}
</script>

<style scoped>

</style>