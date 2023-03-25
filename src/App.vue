/* eslint-disable */
<template>
	<div class="app">
		<Header />
		<router-view />
	</div>
</template>

<script>
import Header from "@/UI/Header"
export default {
	name: 'App',
	components: {
		Header
	},
	created: function () {
		this.$store.dispatch('getArticles')
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.app {
	font-family: 'Montserrat', sans-serif;
	background-color: #3a3a3a;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #fff;
	font-size: 25px;
	width: 100vw;
	height: 100vh;
}
</style>