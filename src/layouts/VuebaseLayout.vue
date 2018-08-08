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
                        v-for="subItem in item.items"
                        :key="subItem.title"
                        @click="moveLocation(subItem.link)"
                        >
                        <v-list-tile-content>
                            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
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
                items: [
                    {
                        title: '주문 관리',
                        items: [
                            { title: '주문 목록', link: '/order/list' },
                            { title: '상품별 주문 목록', link: '/order/product' },
                            { title: '반품 내역', link: '/order/return' }
                        ]
                    },
                    {
                        title: '매입 관리',
                        items: []
                    },
                    {
                        title: '상품 관리',
                        items: [
                            { title: '상품 관리', link: '/product/product' },
                            { title: '카테고리 설정', link: '/product/category' }
                        ]
                    },
                    {
                        title: '단가 관리',
                        items: []
                    },
                    {
                        title: '재고 관리',
                        items: [
                            { title: '입/출고 관리', link: '/inventory/srmanagement' },
                            { title: '입/출고 내역', link: '/inventory/list' },
                            { title: '재고현황', link: '/inventory/stock' },
                            { title: '구역관리', link: '/inventory/area' }
                        ]
                    },
                    {
                        title: '거래처 관리',
                        items: [
                            { title: '거래처 목록', link: '/customer/list' },
                            { title: '거래처 예치금 관리', link: '/customer/credit' },
                            { title: '결재수단 관리', link: '/customer/approval' },
                            { title: '외상 잔액 한도 관리', link: '/customer/credit' },
                            { title: '견적서 관리', link: '/customer/estimate' },
                            { title: '간편 가입 신청 목록', link: '/customer/applicant-list' }
                        ]
                    },
                    {
                        title: '브랜드 관리',
                        items: []
                    },
                    {
                        title: '매출 관리',
                        items: []
                    },
                    {
                        title: '외상잔액 관리',
                        items: []
                    },
                    {
                        title: '정산 관리',
                        items: []
                    },
                    {
                        title: '통계',
                        items: []
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

            moveLocation (path) {
                console.log(router)
            }
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

    .hidden-searching {
        @media $display-breakpoints.sm-and-down {
            display: none !important;
        }
    }

    .list-border-bottom {
        border-bottom: 1px solid rgba(255, 255, 255, .12);
    }

    .body-container{
        padding: 20px;
    }
</style>
