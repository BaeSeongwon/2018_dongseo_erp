<template>
    <v-app>
        <v-navigation-drawer
                width="250"
                class="blue-grey darken-4"
                dark
                persistent
                :mini-variant="miniVariant"
                v-model="drawer"
                fixed
                app
        >
            <v-toolbar flat class="transparent" dense>
                <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                    <v-list-tile>
                        <v-list-tile-action v-if="!miniVariant">
                            <v-icon large color="orange">invert_colors</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content v-if="!miniVariant">
                            <v-list-tile-title><h2>Vuebase</h2></v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon @click.stop="miniVariant = !miniVariant">
                                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-divider></v-divider> 
            <!-- 메뉴 시작 라인 -->
            <v-list>
                <v-list-group
                    v-for="item in items"
                    v-model="item.active"
                    :key="item.title">
                    <v-list-tile slot="activator">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile
                        class="submenu-container" 
                        v-for="subItem in item.subItems"
                        :key="subItem.title"
                        :class="{ active: subItem.isActive }"
                        v-on:click="moveLocation(subItem)"
                        >
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ subItem.title }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
            </v-list>
            <!-- 메뉴 종료 라인 -->
        </v-navigation-drawer>
        <v-content>
            <div class='body-container'>
                <router-view />
            </div>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'VuebaseLayout',

        data () {
            return {
                drawer: true,
                fixed: false,
                subItemArray: [],
                items: [
                    {
                        title: '주문 관리',
                        subItems: [
                            { title: '주문 목록', component: '/order/list', isActive: false },
                            { title: '상품별 주문 목록', component: '/order/product', isActive: false },
                            { title: '반품 내역', component: '/order/return', isActive: false }
                        ]
                    },
                    {
                        title: '매입 관리',
                        subItems: []
                    },
                    {
                        title: '상품 관리',
                        subItems: [
                            { title: '상품 관리', component: '/product/product', isActive: true },
                            { title: '카테고리 설정', component: '/product/category', isActive: false }
                        ]
                    },
                    {
                        title: '단가 관리',
                        subItems: []
                    },
                    {
                        title: '재고 관리',
                        subItems: [
                            { title: '입/출고 관리', component: '/inventory/srmanagement', isActive: false },
                            { title: '입/출고 내역', component: '/inventory/list', isActive: false },
                            { title: '재고현황', component: '/inventory/stock', isActive: false },
                            { title: '구역관리', component: '/inventory/area', isActive: false }
                        ]
                    },
                    {
                        title: '거래처 관리',
                        subItems: [
                            { title: '거래처 목록', component: '/customer/list', isActive: false },
                            { title: '거래처 예치금 관리', component: '/customer/credit', isActive: false },
                            { title: '결재수단 관리', component: '/customer/approval', isActive: false },
                            { title: '외상 잔액 한도 관리', component: '/customer/credit', isActive: false },
                            { title: '견적서 관리', component: '/customer/estimate', isActive: false },
                            { title: '간편 가입 신청 목록', component: '/customer/applicant-list', isActive: false }
                        ]
                    },
                    {
                        title: '브랜드 관리',
                        subItems: []
                    },
                    {
                        title: '매출 관리',
                        subItems: []
                    },
                    {
                        title: '외상잔액 관리',
                        subItems: []
                    },
                    {
                        title: '정산 관리',
                        subItems: []
                    },
                    {
                        title: '통계',
                        subItems: []
                    }
                ],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                tabs: null,
                tabsItems: [
                    {id: 1, title: 'Indicators', link: 'indicators'},
                    {id: 2, title: 'Backup', link: 'backup'},
                    {id: 3, title: 'Logs', link: 'logs'}
                ],
                menuItems: [
                    'Vue', 'NodeJS', 'Laravel'
                ],
                searching: false,
                search: ''
            }
        },

        methods: {
            onBlur () {
                this.searching = false
                this.search = ''
            },

            searchBegin () {
                this.searching = true
                setTimeout(() => document.querySelector('#search').focus(), 50)
            },

            searchEnd () {
                this.searching = false
                this.search = ''
                document.querySelector('#search').blur()
            },

            moveLocation (subItem) {
                this.initSubMenuActive();
                subItem.isActive = true;
                this.$router.push(subItem.component);
            },

            initSubMenuActive () {
                this.items.forEach((item)=>{
                    item.subItems.forEach((item)=>{
                        item.isActive = false;
                    })
                })
            }
        },

        created: function(){
            createSubArray();
        }
    }
</script>

<style scoped lang="stylus">
    @import '../../node_modules/vuetify/src/stylus/settings/_variables.styl'

    .bottom-menu {
        position: absolute;
        width: 100%;
        bottom: 0;
    }

    .searching {
        overflow: hidden;
        width: 208px;
        padding-left: 8px;
        transition: $primary-transition;
    }

    .searching--closed {
        padding-left: 0;
        width: 0;
    }

    .searching > * {
        right: 8px;
    }

    .searching--closed > * {
        display: none;
    }

    .list-border-bottom {
        border-bottom: 1px solid rgba(255, 255, 255, .12);
    }

    .body-container{
        padding: 20px;
    }
</style>
