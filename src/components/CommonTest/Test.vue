<template>
  <div style="padding:15px;">
    <h1>공통 컴포넌트 테스트 </h1>
    <hr>
    
    <br>
    <br>
    <v-flex xs12 sm3>
      <h3>검색폼 [값: {{ searchModel }}]</h3>
      <search-form label="검색어를 입력해 주세요" :limit="null" @onSubmit="fucc" v-model="searchModel" />
    </v-flex>
    
    <br>
    <br>
    <v-flex xs12 sm3>
        <h3>옵션버튼 [값: {{ toggleModel }}]</h3>
      <button-toggle v-model="toggleModel" :list="[ '전체' , '일별' , '주별', '월별' ]" :default="2" />
    </v-flex>
    
    <br>
    <br>
    <v-flex xs12 sm6>
      <h3>날짜범위 [값: {{ dateModel }}]</h3>
      <date-range v-model="dateModel" />
    </v-flex>
    
    <br>
    <br>
    <v-flex xs12 sm6 style="clear:both;">
      <h3>테이블 </h3>
      <detail-table>
          <tbody slot="contents">
            <tr>
              <th>11</th>
              <td>11</td>
            </tr>
          </tbody>
      </detail-table>
      <!-- <table-comp :headers="['id', 'name', 'price']" /> -->
    </v-flex>

  </div>
</template>



<script>
import { 
  SearchForm, 
  ButtonToggle,
  DateRange
} from '../commons/Form'

import { 
  TableComp,
  DetailTable
} from '../commons/UIComponents'

  export default {
    name: 'Test',


    components: {
      SearchForm,
      ButtonToggle,
      DateRange,
      TableComp,
      DetailTable
    },

    data(){
      return{
        
        searchModel:0,
        toggleModel:null,
        dateModel:null,

        tableData: [
          { id: 10, name: 'Prod 01', price: 100000 },
          { id: 11, name: 'Prod 02', price: 200000 },
          { id: 12, name: 'Prod 02', price: 200000 },
          { id: 13, name: 'Prod 03', price: 300000 },
        ]

      }
    },


    methods: {
      fucc(e){
        alert(e)
      }
    }

  }
  
</script>
<style scoped>

</style>
