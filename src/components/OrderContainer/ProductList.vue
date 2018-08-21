<template>
<v-container>
  <page-header title="상품별 주문 목록"/>
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
              <td rowspan="3" style="width: 30%; text-align:left;">
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
              <th>거래처 검색</th>
              <td>
                <search-form
                  label="검색어를 입력해 주세요">

                </search-form>
              </td>
            </tr>
            <tr>
              <th>키워드 검색</th>
              <td>
                <v-layout>
                  <v-flex xs2>
                    <select-items
                      :items="['상품코드', '주문번호']">

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
                      :items="category"
                      label="1차카테고리"/>
                  </v-flex>
                  <v-flex xs2>
                    <v-select
                      :items="['수령전','수령완료']"
                      label="2차카테고리"/>
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
    name: 'ProductList',
    components: {
      DetailTable,
      ListTable,
      ButtonToggle,
      DateRange,
      SearchForm,
      PageHeader,
      SelectItems
    },
    data() {
      return {
        period: ['전체','전일','당일','한달'],
        category: [
          {
            item: '시럽',
            subItem: ['1883','모닌','다빈치','토라니','포모나','스포트','마리브리자드']
          },
          {
            item: '소스',
            subItem: ['기라델러','다빈치','토라니','포모나','큐팜스']
          },
        ]
      }
    },
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
