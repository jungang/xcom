<template>
  <div>
    <xcom-practice :propData='initData'/>
    <xcom-practices :propData='initData'/>
    <xcom-button>button ..........1  </xcom-button>
  </div>

</template>

<script>
  export default {
    data(){
      return {
        initData: 'hello 你好@@'
      }
    }
  }
</script>

<style>

</style>