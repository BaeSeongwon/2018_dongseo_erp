<template>
<v-container>
  <page-header title="상품 관리" />
  <v-container>
    <v-layout>
      <v-flex>
        <detail-table>
          <tbody slot="contents">
            <tr>
              <th>키워드 검색</th>
              <td>
                <v-container>
                  <v-layout>
                    <v-flex>
                      <v-select
                        :items="['상품명', '상품코드','제조사']"/>
                    </v-flex>
                    <v-flex>
                      <search-form label="검색어를 입력해 주세요"></search-form>
                    </v-flex>
                  </v-layout>
                </v-container>
              </td>
              <td style="width: 35%;">
                <v-btn>검색</v-btn>
              </td>
            </tr>
            <tr>
              <th>즉시 검색</th>
              <td colspan="2">
                <v-container>
                  <v-layout>
                    <v-flex class="select-container" xs2>
                      <v-select
                        :items="['판매중','판매중지','재고부족']"
                        label="판매상태"/>
                    </v-flex>
                    <v-flex class="select-container" xs2>
                      <v-select
                        :items="['직배송','택배배송']"
                        label="배송유형"/>
                    </v-flex>
                    <v-flex class="select-container" xs2>
                      <v-select
                        :items="['테스트']"
                        label="1차카테고리"/>
                    </v-flex>
                    <v-flex class="select-container" xs2>
                      <v-select
                        :items="['테스트']"
                        label="2차카테고리"/>
                    </v-flex>
                    <v-flex class="select-container" xs2>
                      <v-select
                        :items="['테스트']"
                        label="브랜드"/>
                    </v-flex>
                  </v-layout>
                </v-container>
              </td>
            </tr>
          </tbody>
        </detail-table>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container class="middle-container">
    <v-layout>
      <v-flex>
        <span>전체 0건</span>
      </v-flex>
      <v-flex>
        <v-btn>판매중</v-btn>
        <v-btn>판매중지</v-btn>
      </v-flex>
      <v-flex>
        <v-btn>재고변경</v-btn>
      </v-flex>
      <v-flex>
        <v-btn>삭제</v-btn>
        <v-btn>상품 일괄 수정</v-btn>
        <v-btn>상품 대량 등록</v-btn>
        <v-btn>상품등록</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container>
    <v-layout>
      <v-flex>
        <v-data-table 
          :headers="headers"
          hide-action>

        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container>
    <v-layout>
      <v-flex class="text-xs-center">
        <v-pagination :length="1"></v-pagination>
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
    /* 상품관리 페이지 */
    name: 'Product',
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
        headers: []
      }
    }
  }
</script>
<style scoped>
  .select-container{
    padding: 0px 5px;
  }

  .middle-container {
    margin-top: 30px;
  }
</style>
