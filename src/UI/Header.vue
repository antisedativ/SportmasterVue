<template>
	<v-app-bar
		color="purple accent-4"
		app
	>
	
		<router-link  to="/" class="title">
			VUE
		</router-link>
		<v-spacer></v-spacer>
		<div class="nav">
			<router-link to="/" class="btn">Main</router-link>
			<router-link to="/form" class="btn">Form</router-link>
			<router-link to="/about" class="btn">About</router-link>
			<router-link to="/" class="btn">
				<v-icon>mdi-wrench</v-icon>
			</router-link>
		</div>
	</v-app-bar>
</template>

<script>
export default {
	name: "HeaderComp"
}
</script>

<style scoped>
	.title {
		font-weight: bold;
		font-size: 30px;
		display: contents;
		text-decoration: none;
		color: white;
	}



	.btn {
		margin: 10px 0 0 20px;
		text-decoration: none;
		color: white;
	}

	.title:hover,
	.btn:hover {
		/*color: lightskyblue;*/
		color: #d4407d;
	}
</style>