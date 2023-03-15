<template>
	<div>
		<ArticleForm />
	</div>
</template>

<script>
import ArticleForm from '@/components/ArticleForm.vue'
import store from '@/store/index'
export default {
	name: "FormPage",
	components: {
		ArticleForm
	},
	data() {
		return {addArticle: store.addArticle}
	}
}
</script>

<style scoped>
</style>