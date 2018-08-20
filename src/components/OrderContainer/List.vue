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
              <td colspan="2">
                <v-layout>
                  <v-flex xs2>
                    <v-select
                      :items="['직배송','택배배송']"
                      label="배송유형" />
                  </v-flex>
                  <v-flex xs2>
                    <v-select
                      :items="['주문완료','주문변경','주문취소','반품접수','반품완료']"
                      label="주문상태"/>
                  </v-flex>
                  <v-flex xs2>
                    <v-select
                      :items="['출고지시전','출고전','출고완료','출고거절']"
                      label="출고상태"/>
                  </v-flex>
                  <v-flex xs2>
                    <v-select
                      :items="['수령전','수령완료']"
                      label="수령상태"/>
                  </v-flex>
                  <v-flex xs2>
                    <v-select
                      :items="['박주미','배성원','김성훈']"
                      label="배송담당자"/>
                  </v-flex>
                  <v-flex xs2>
                    <v-select
                      :items="['박주미','배성원','김성훈','영업테스트']"
                      label="영업담당자"/>
                  </v-flex>
                  <v-flex xs2>
                    <v-select
                      :items="['테스트','테스트2','테스트3']"
                      label="브랜드"/>
                  </v-flex>
                </v-layout>
              </td>
            </tr>
          </tbody>
        </detail-table>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs6>
        <v-layout>
          <v-flex xs3 style="text-align:left">
            <v-btn>거래명세표 출력</v-btn>
          </v-flex>
          <v-flex xs9 style="text-align:left">
            <v-btn>거래명세표 출력</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs6>
        <v-flex style="text-align:right">
          <v-btn>신규주문 등록</v-btn>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
  <hr/>
  <v-container>
    <v-layout>
      <v-flex xs6 style="text-align:left">
        <span>전체 0건</span>
        <v-btn>출고지시 완료</v-btn>
        <v-btn>출고 완료</v-btn>
      </v-flex>
      <v-flex xs6 style="text-align:right">
        <span>* 전일~당일까지의 주문내역이 기본으로 노출됩니다.</span>
        <v-btn>택배원장</v-btn>
        <v-btn>주문내역</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container>
    <v-layout>
      <v-flex> 
        <v-data-table
          :headers="headers"
          hide-actions>

        </v-data-table>
      </v-flex>      
    </v-layout>
  </v-container>
  <v-container>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-pagination v-model="page" :length="1"/>
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
        page: 1,

        headers: [
          { text: 'Check', align: 'left', value: 'checkbox', sortable: false },
          { text:  'no', value: 'num', sortable: false },
          { text: '주문일시', value: 'date' },
          { text: '배송요청일', value: 'date' },
          { text: '주문번호', value: 'date', sortable: false },
          { text: '거래처', value: 'date' },
          { text: '배송유형', value: 'date', sortable: false },
          { text: '총 주문수량', value: 'date', sortable: false },
          { text: '결제수단', value: 'date', sortable: false },
          { text: '주문금액', value: 'date' },
          { text: '주문상태', value: 'date', sortable: false },
          { text: '출고상태', value: 'date', sortable: false },
          { text: '물품수령상태', value: 'date', sortable: false },
        ]
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
    border-style: dotted;
    border-color: gainsboro;
  }

  .middle-container{
    margin: 10px 0px;
  }
</style>
