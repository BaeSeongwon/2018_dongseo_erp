<template>
  <div>
    <div class="header-container">
      <div>
          <h2>주문 목록</h2>
      </div>
      <div>
          홈 / 주문목록
      </div>
    </div>
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
    }
  }
</script>
<style scoped>
  .header-container {
      height: 40px;
  }

  .header-container div:nth-child(1){
      float: left;
  }

  .header-container div:nth-child(2){
      float: right;
  }

  .period-row-container{
    float: left;
  }

  .date-container{
    margin-bottom: 5px;
    margin-left: 10px;
  }
</style>
