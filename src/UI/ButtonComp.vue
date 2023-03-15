<template>
    <button class="btn">ADD</button>
</template>

<script>
export default {
    name: 'ButtonComp'
}
</script>

<style scoped>
.btn {
		background-color: #d4407d;
    color: #fff;
    font-size: 20px;
    width: 100%;
    height: 40px;
    cursor: pointer;
		border-radius: 5px;
		border: 1px solid #431022;
}

button,
button:active,
button:focus  {
	border:none;
}
</style>