<template>
	<div class="wrapper">
		<div class="content">
			<router-link  to="/" class="title">
				VUE
			</router-link>
			<div class="nav">
				<router-link to="/" class="btn">Main</router-link>
				<router-link to="/form" class="btn">Form</router-link>
				<router-link to="/about" class="btn">About</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "HeaderComp"
}
</script>

<style scoped>
	.wrapper {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 70px;
		color: white;
		background-color: #191715;
		box-shadow: 0 0 20px 5px rgba(0, 0, 0, .5);
	}

	.title {
		font-weight: bold;
		font-size: 30px;
		display: contents;
		text-decoration: none;
		color: white;
	}

	.content {
		margin-top: 15px;
		display: inherit;
		justify-content: space-between;
		width: 600px;
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