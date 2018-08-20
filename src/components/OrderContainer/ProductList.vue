<template>
  <div>
    <div class="header-table-container">

    </div>
    <div class="main-table-container">
      <div></div>
      <div></div>
    </div>
    <div class="paging-container">

    </div>
  </div>
</template>
<script>
  export default {
    /* 상품별 주문목록 페이지 */
    name: 'ProductList',
    methods: {
      sendComponentInfo(){
        this.$emit('getComponent','상품별 주문 목록');
      }
    },
    mounted(){
      this.sendComponentInfo();
    }
  }
</script>
<style scoped>
  .header-table-container{
    width: 100%;
    height: 350px;
    border: 1px solid blue;
    padding: 10px;
  }

  .main-table-container{
    width: 100%;
    height: 350px;
    border: 1px solid crimson;
    padding: 10px;
    margin-top: 10px;
  }

  .paging-container{
    width: 100%;
    height: 80px;
    border: 1px solid yellow;
  }
</style>
