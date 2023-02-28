<template>
    <button class="btn">ADD</button>
</template>

<script>
export default {
    name: 'ButtonComp'
}
</script>

<style>
.btn {
    color: #fff;
    font-size: 20px;
    width: 100%;
    height: 40px;
    cursor: pointer;
}

.btn:hover {
    background-color: #000;
    transition: cubic-bezier(0,0,0,1) 1s;
}
</style>