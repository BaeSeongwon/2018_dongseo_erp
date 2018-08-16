import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Test',
        component: () => import('@/components/CommonTest/Test')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/components/Dashboard/Layout'),
        children: [
            {
                path: 'indicators',
                name: 'dashboard.indicators',
                component: () => import('@/components/Dashboard/Indicators')
            },
            {
                path: 'backup',
                name: 'dashboard.backup',
                component: () => import('@/components/Dashboard/Backup')
            },
            {
                path: 'logs',
                name: 'dashboard.logs',
                component: () => import('@/components/Dashboard/Logs')
            }
        ]
    },



    
    { // ===== 브랜드관리 - seongh7800 ===== //
        path: '/brands',
        name: 'Brand',
        component:()=> import('@/components/Dashboard/Layout'),
        children: [
            {
                path: '',
                name: 'BrandList',
                component: ()=> import('@/components/BrandContainer/BrandList')
            }
        ]
    },// ===== 브랜드관리 - seongh7800 ===== //
]

export default new VueRouter({
    mode: 'history',
    routes
})
