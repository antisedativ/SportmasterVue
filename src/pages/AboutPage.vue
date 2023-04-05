/* eslint-disable */
<template>
	<v-main>
		<v-carousel hide-delimiters height="700">
			<v-carousel-item
				v-for="(item,i) in items"
				:key="i"
				:src="item.src"
				cover
			/>
		</v-carousel>
	</v-main>
</template>

<script>
export default {
	data () {
      return {
        items: [
          {
            src: 'https://99px.ru/sstorage/53/2013/12/tmb_91205_3821.jpg',
          },
          {
            src: 'https://look.com.ua/pic/201702/1600x900/look.com.ua-196567.jpg',
          },
          {
            src: 'https://www.fonstola.ru/pic/201302/1600x900/fonstola.ru_89527.jpg',
          },
          {
            src: 'https://i.pinimg.com/736x/e1/92/23/e1922324d7855241a74370b94e43542d.jpg',
          },
        ],
      }
    },
}
</script>

<style scoped>
v-carousel,
v-main {
	width: 300px;
}
</style>