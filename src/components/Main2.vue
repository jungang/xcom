<template>
    <div class="container">
        <div>{{msg}}</div>
        <div>{{propData}}</div>
    </div>
</template>

<script>
    export default {
        name: 'XcomPractices',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App222'
            }
        },
        props: {
            propData: {
                type: String,
                default: '我是默认值'
            }
        }
    }
</script>

<style lang="scss">
    .container{
        text-align: center;
    }
</style>