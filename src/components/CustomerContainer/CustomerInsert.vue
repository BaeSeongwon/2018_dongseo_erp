<template>
<v-container style=" ">
    



<!-- ========== 헤더 ========== -->
<page-header title="새 거래처 등록" />
<br>


<v-layout row v-if="loading">
    <v-flex xs12 md12  style="text-align:center;">
        <br>
        <v-progress-circular
            :value="80"
            :width="2"
            :size="50"
            color="deep-orange lighten-2"
            indeterminate
            style="width:200px !important;"
        ></v-progress-circular>
            <br>
            <br>
            <br>
    </v-flex>
</v-layout>

    



<!-- ========== 컨텐츠 ========== -->
<div v-else>

    <div class="cardbox cardbox-header" >
        <h3>거래처정보</h3>
    </div>
    <v-layout row cardbox cardbox-body >
        <v-flex xs12 md12 >
            
            <table style="width:94%;">
                <colgroup>
                    <col width="15%">
                    <col width="">
                    <col width="15%">
                    <col width="">
                </colgroup>
                <tr>
                    <th><h4>거래처 코드</h4></th>
                    <td colspan="3">
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="코드를 입력해 주세요"
                            required
                        ></v-text-field>
                    </td>
                </tr>
                <tr>
                    <th><h4>거래처명 *</h4></th>
                    <td>
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="거래처명을 입력해 주세요"
                            required
                        ></v-text-field>
                    </td>
                    <th><h4>거래처 업종</h4></th>
                    <td>
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                        ></v-text-field>
                    </td>
                </tr>
                <tr>
                    <th><h4>브랜드 선택</h4></th>
                    <td>
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="코드를 입력해 주세요"
                            required
                        ></v-text-field>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th><h4>배송지</h4></th>
                    <td colspan="3">
                        <search-form label="주소를 입력해 주세요" />
                    </td>
                </tr>
                <tr>
                    <th><h4>배송유형</h4></th>
                    <td colspan="3">
                        <search-form label="주소를 입력해 주세요" />
                    </td>
                </tr>
                <tr>
                    <th><h4>거래처연락처</h4></th>
                    <td>
                        <search-form label="주소를 입력해 주세요" />
                    </td>
                    <th><h4>세금계산서 정보</h4></th>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <th><h4>아이디</h4></th>
                    <td>
                        <search-form label="주소를 입력해 주세요" />
                    </td>
                    <th><h4>패스워드</h4></th>
                    <td>
                        <search-form label="주소를 입력해 주세요" />
                    </td>
                </tr>
            </table>

        </v-flex>
    </v-layout>
<br>



    <div class="cardbox cardbox-header" >
        <h3>배송/영업 담당자 정보</h3>
    </div>
    <v-layout row cardbox cardbox-body >
        <v-flex xs12 md12 >
            
            <table style="width:94%;">
                <colgroup>
                    <col width="15%">
                    <col width="">
                    <col width="15%">
                    <col width="">
                </colgroup>
                <tr>
                    <th><h4>배송 담당자 *</h4></th>
                    <td>
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="코드를 입력해 주세요"
                            required
                        ></v-text-field>
                    </td>
                    <th><h4>연락처</h4></th>
                    <td>
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="코드를 입력해 주세요"
                            required
                        ></v-text-field>
                    </td>
                </tr>
                <tr>
                    <th><h4>영업 담당자</h4></th>
                    <td>
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="코드를 입력해 주세요"
                            required
                        ></v-text-field>
                    </td>
                    <th><h4>연락처</h4></th>
                    <td>
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="코드를 입력해 주세요"
                            required
                        ></v-text-field>
                    </td>
                </tr>
            </table>

        </v-flex>
    </v-layout>
<br>

    <div class="cardbox cardbox-header" >
        <h3>단가 그룹</h3>
    </div>
    <v-layout row cardbox cardbox-body >
        <v-flex xs12 md12 >
            
            <table style="width:94%;">
                <colgroup>
                    <col width="15%">
                    <col width="">
                    <col width="15%">
                    <col width="">
                </colgroup>
                <tr>
                    <th><h4>단가그룹선택</h4></th>
                    <td>
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="코드를 입력해 주세요"
                            required
                        ></v-text-field>
                    </td>
                    <th></th>
                    <td></td>
                </tr>
            </table>

        </v-flex>
    </v-layout>
<br>




    <div class="cardbox cardbox-header" >
        <h3>할인/할증율 등급</h3>
    </div>
    <v-layout row cardbox cardbox-body >
        <v-flex xs12 md12 >
            
            <table style="width:94%;">
                <colgroup>
                    <col width="15%">
                    <col width="">
                    <col width="15%">
                    <col width="">
                </colgroup>
                <tr>
                    <th><h4>할인/할증율 등급 선택</h4></th>
                    <td>
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="코드를 입력해 주세요"
                            required
                        ></v-text-field>
                    </td>
                    <th></th>
                    <td></td>
                </tr>
            </table>

        </v-flex>
    </v-layout>
<br>


    <div class="cardbox cardbox-header" >
        <h3>수입물품 유통이력 정보</h3>
    </div>
    <v-layout row cardbox cardbox-body >
        <v-flex xs12 md12 >
            
             <table style="width:94%;">
                <colgroup>
                    <col width="15%">
                    <col width="">
                    <col width="15%">
                    <col width="">
                </colgroup>
                <tr>
                    <th><h4>사업자등록증 보유 유무</h4></th>
                    <td>
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="코드를 입력해 주세요"
                            required
                        ></v-text-field>
                    </td>
                    <th><h4>양수자 유형</h4></th>
                    <td>
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="코드를 입력해 주세요"
                            required
                        ></v-text-field>
                    </td>
                </tr>
            </table>

        </v-flex>
    </v-layout>
<br>


<v-btn
    fixed
    dark
    fab
    bottom
    right
    color="pupple"
>
    <v-icon>save</v-icon>
</v-btn>

</div> <!-- ========== 컨텐츠 ========== -->   
                

    

</v-container>
</template>




<script>
import { 
  SearchForm, 
  ButtonToggle,
  DateRange,
  SelectItems,
} from '../commons/Form'

import {
    PageHeader,
    ListTable,
    DetailTable,
} from '../commons/UIComponents';


export default{
    name : 'BrandList',

    // ========== components ========== //
    components: {
        SearchForm,
        ButtonToggle,
        SelectItems,
        PageHeader,
        ListTable,
        DetailTable,
    },
    
    
    
    
    // ========== data ========== //
    data() {
        return {
            loading:true,
            tabs: null,
                tabsItems: [
                    {id: 1, title: 'Indicators', link: 'indicators'},
                    {id: 2, title: 'Backup', link: 'backup'},
                    {id: 3, title: 'Logs', link: 'logs'}
                ],

            tableData: [
                { id: 10, name: 'Prod 01', price: 100000 },
                { id: 11, name: 'Prod 02', price: 200000 },
                { id: 12, name: 'Prod 02', price: 200000 },
                { id: 13, name: 'Prod 03', price: 300000 },
            ],



            search: '',
            pagination: {},
            selected: [],

             headers: [
                {
                    text: 'Dessert (100g serving)',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Calories', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Iron (%)', value: 'iron' }
            ],
            desserts: [
                {
                    id:1,
                    value: false,
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%'
                },
                {
                    id:1,
                    value: false,
                    name: 'Ice cream sandwich',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    iron: '1%'
                },
                {
                    id:1,
                    value: false,
                    name: 'Eclair',
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    iron: '7%'
                },
                {
                    id:1,
                    value: false,
                    name: 'Cupcake',
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    iron: '8%'
                },
                {
                    id:1,
                    value: false,
                    name: 'Gingerbread',
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    iron: '16%'
                },
                {
                    id:1,
                    value: false,
                    name: 'Jelly bean',
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    iron: '0%'
                },
                {
                    id:1,
                    value: false,
                    name: 'Lollipop',
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    iron: '2%'
                },
                {
                    id:1,
                    value: false,
                    name: 'Honeycomb',
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    iron: '45%'
                },
                {
                    id:1,
                    value: false,
                    name: 'Donut',
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    iron: '22%'
                },
                {
                    id:1,
                    value: false,
                    name: 'KitKat',
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    iron: '6%'
                }
            ],

            page: 1



        }
    },
    
    
    
    
    // ========== created ========== //
    created() {
        setTimeout(()=>{
            this.$set(this, 'loading', false)
        }, 780)
    },
    
    
    
    
    // ========== methods ========== //
    methods: {
        
        

    },


    
}
</script>



<style>
.listItem{
    cursor: pointer;
}

</style>
