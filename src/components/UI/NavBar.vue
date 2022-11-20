<template>
    <div class="navbar">
        <div>Vue 3</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/vue-post/posts')">Posts</my-button>
            <my-button @click="$router.push('/vue-post/about')" style="margin-left: 20px">About</my-button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.navbar{
    height: 59px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.navbar__btns{
    margin-left: auto;
}
</style>