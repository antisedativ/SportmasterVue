/* eslint-disable */
<template>
	<v-app class="app">
		<Header />
		<v-container class="d-flex justify-center">
			<router-view />
		</v-container>
		<Footer />
	</v-app>
</template>

<script>
import Footer from "@/UI/Footer"
import Header from "@/UI/Header"
export default {
	name: 'App',
	components: {
		Header,
		Footer
	},
	created: function () {
		this.$store.dispatch('getArticles')
	}
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

</style>