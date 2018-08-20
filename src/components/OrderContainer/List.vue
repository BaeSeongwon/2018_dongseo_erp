<template>
<v-container style=" ">

  <!-- ========== 헤더 ========== -->
  <page-header
    title="주문 목록"/>

  <v-container grid-list-md text-xs-center style="padding:10px 0;">
    <v-layout row wrap>
      <v-flex>
        <detail-table>
          <tbody slot="contents">
            <tr>
              <th>기간 구분</th>
              <td>
                <v-radio-group
                  v-model="periodDivision">
                  <v-layout>
                    <v-flex
                      xs3
                      v-for="item in ['주문 일시', '배송 요청일']"
                      :key="item">

                      <!-- 기간 구분 폼 -->
                      <v-radio
                        :label="item"
                        :value="item">
                      </v-radio>

                    </v-flex>
                  </v-layout>                  
                </v-radio-group>
              </td>
              <td rowspan="3" style="width: 20%; text-align:left;">
                <v-btn small>검색</v-btn>
              </td>
            </tr>

            <tr>
              <th>기간</th>
              <td>
                <v-layout>
                  <v-flex xs4>
                     <button-toggle
                      :list="period"
                      v-model="selectPeriod">
                    </button-toggle>
                  </v-flex>  
                  <v-flex xs8>
                    <date-range></date-range>
                  </v-flex>               
                </v-layout>                
              </td>
            </tr>
            <tr>
              <th>키워드 검색</th>
              <td>
                <v-layout>
                  <v-flex xs2>
                    <select-items
                      :items="['거래처명', '주문번호']">

                    </select-items>
                  </v-flex>
                  <v-flex xs10>
                    <search-form label="검색어를 입력해 주세요">

                    </search-form>
                  </v-flex>
                </v-layout>
              </td>
            </tr>
            <tr>
              <th>즉시검색</th>
              <td>
                <v-layout>
                  <v-flex>
                    
                  </v-flex>
                </v-layout>
              </td>
            </tr>
          </tbody>
        </detail-table>
      </v-flex>
    </v-layout>
  </v-container>
</v-container>
</template>
<script>

  import {
    SearchForm,
    ButtonToggle,
    DateRange,
    SelectItems
  } from '@/components/commons/Form'

  import {
    PageHeader,
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
      SearchForm,
      PageHeader,
      SelectItems
    },
    data(){
      return {
        periodDivision: '주문 일시',
        period: ['전체','전일','당일','한달'],
        selectPeriod: '',
      }
    },
    methods: {
      
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
</style>
