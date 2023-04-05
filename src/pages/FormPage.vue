<template>
	<v-main>
		<v-container class="justify-center">
			<ArticleForm />
		</v-container>
	</v-main>
</template>

<script>
import ArticleForm from '@/components/ArticleForm.vue'
export default {
	name: "FormPage",
	components: {
		ArticleForm
	}
}
</script>

<style scoped>
</style>