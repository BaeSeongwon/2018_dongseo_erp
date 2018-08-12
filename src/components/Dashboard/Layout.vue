<template>
    <div>
        <router-view />                   
    </div>
</template>

<script>
    export default {
        data(){
            return {
            }
        },
        mounted: function(){
            console.log(this.$route.path)
        }
    }
</script>

<style scoped>
   
</style>
