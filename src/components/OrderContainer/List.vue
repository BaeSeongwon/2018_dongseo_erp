<template>
  <div>
    <div>
      <detail-table>
        <tbody slot="contents">
          <tr>
            <th>기간 구분</th>
            <td>
              <v-flex xs12 sm6>
                <button-toggle
                  :list="this.periodDivision"
                  :default="0">
                </button-toggle>
              </v-flex>              
            </td>
          </tr>
          <tr>
            <th>기간</th>
            <td>
              <v-flex xs3>
                <button-toggle
                  :list="this.period"
                  :default="0">
                </button-toggle>
              </v-flex>
              <v-flex xs6>
                <date-range></date-range>
              </v-flex>    
            </td>
          </tr>
          <tr>
            <th>키워드 검색</th>
            <td>
              <v-flex md6>

              </v-flex>
              <v-flex xs4 sm4 lg4>
                <search-form
                  label="검색어를 입력해주세요.">

                </search-form>
              </v-flex>
            </td>
          </tr>
          <tr>
            <th>즉시 검색</th>
            <td></td>
          </tr>
        </tbody>
      </detail-table>
    </div>
    <!-- 중간 버튼라인 -->
    <div class="middle-container">
      <div></div>
      <hr>
      <div></div>
    </div>
    <div class="main-table-container">

    </div>
    <div class="paging-container">

    </div>
  </div>
</template>
<script>

  import {
    SearchForm,
    ButtonToggle,
    DateRange
  } from '@/components/commons/Form'

  import {
    DetailTable,
    ListTable
  } from '@/components/commons/UIComponents'

  export default {
    /* 주문목록 페이지 */
    name: 'List',
    components: {
      DetailTable,
      ListTable,
      ButtonToggle,
      DateRange,
      SearchForm
    },
    data(){
      return {
        periodDivision: ['주문 일시', '배송 요청일'],
        period: ['전체','전일','당일','한달']
      }
    },
    methods: {
      sendComponentInfo(){
        this.$emit('getComponent','주문 목록');
      }
    },
    mounted(){
      this.sendComponentInfo();
    }
  }
</script>
<style scoped>
  .period-row-container{
    float: left;
  }

  .date-container{
    margin-bottom: 5px;
    margin-left: 10px;
  }

  hr{
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .middle-container{
    width: 100%;
    height: 200px;
    border: 1px solid red;
    margin-top: 50px;
    padding: 10px;
  }

  .middle-container div:nth-child(1){
    width: 100%;
    height: 80px;
    border: 1px solid brown;
  }

  .middle-container div:nth-child(3){
    width: 100%;
    height: 80px;
    border: 1px solid blueviolet;
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
