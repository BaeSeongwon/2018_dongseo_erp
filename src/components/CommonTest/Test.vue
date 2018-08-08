<template>
  <div>
    <h1>공통 컴포넌트 테스트</h1>

    <v-flex xs12 sm3>
      <search-form />
    </v-flex>

  </div>
</template>



<script>
import { SearchForm } from '../commons/Form'

  export default {
    name: 'Test',


    components: {
      SearchForm
    },
  }
  
</script>
<style scoped>

</style>
