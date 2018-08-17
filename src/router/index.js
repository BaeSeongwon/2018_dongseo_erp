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
        path: '/order',
        name: 'OrderContainer',
        component: () => import('@/components/Dashboard/Layout'),
        children: [
            {
                path: 'list',
                name: 'OrderContainer.List',
                component: () => import('@/components/OrderContainer/List')
            },
            {
                path: 'product',
                name: 'OrderContainer.ProductList',
                component: () => import('@/components/OrderContainer/ProductList')
            },
            {
                path: 'return',
                name: 'OrderContainer.Return',
                component: () => import('@/components/OrderContainer/Return')
            },
            {
                path: 'setting',
                name: 'OrderContainer.Setting',
                component: () => import('@/components/OrderContainer/Setting')
            }
        ]
    },
    {
        path: '/inventory',
        name: 'InventoryContainer',
        component: () => import('@/components/Dashboard/Layout'),
        children: [
            {
                path: 'area',
                name: 'InventoryContainer.AreaManagement',
                component: () => import('@/components/InventoryContainer/AreaManagement')
            },
            {
                path: 'list',
                name: 'InventoryContainer.SrList',
                component: () => import('@/components/InventoryContainer/SrList')
            },
            {
                path: 'srmanagement',
                name: 'InventoryContainer.SrManagement',
                component: () => import('@/components/InventoryContainer/SrManagement')
            },
            {
                path: 'stock',
                name: 'InventoryContainer.StockStatus',
                component: () => import('@/components/InventoryContainer/StockStatus')
            }
        ]
    },
    {
        path: '/product',
        name: 'ProductContainer',
        component: () => import('@/components/Dashboard/Layout'),
        children: [
            {
                path: 'category',
                name: 'ProductContainer.CategorySetting',
                component: () => import('@/components/ProductContainer/CategorySetting')
            },
            {
                path: 'product',
                name: 'ProductContainer.Product',
                component: () => import('@/components/ProductContainer/Product')
            }
        ]
    },
    {
        path: '/customer',
        name: 'CustomerContainer',
        component: () => import('@/components/Dashboard/Layout'),
        children: [
            {
                path: 'applicant-list',
                name: 'CustomerContainer.ApplicantList',
                component: () => import('@/components/CustomerContainer/ApplicantList')
            },
            {
                path: 'approval',
                name: 'CustomerContainer.ApprovalMethod',
                component: () => import('@/components/CustomerContainer/ApprovalMethod')
            },
            {
                path: 'credit',
                name: 'CustomerContainer.Credit',
                component: () => import('@/components/CustomerContainer/Credit')
            },
            {
                path: 'deposit',
                name: 'CustomerContainer.deposit',
                component: () => import('@/components/CustomerContainer/deposit')
            },
            {
                path: 'estimate',
                name: 'CustomerContainer.Estimate',
                component: () => import('@/components/CustomerContainer/Estimate')
            },
            {
                path: 'list',
                name: 'CustomerContainer.List',
                component: () => import('@/components/CustomerContainer/List')
            }
        ]
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
            { // === 목록 ==== //
                path: '',
                name: 'BrandList',
                component: ()=> import('@/components/BrandContainer/BrandList')
            },
            
            { // === 입점요청 ==== //
                path: 'applicant',
                name: 'BrandApplicant',
                component: ()=> import('@/components/BrandContainer/BrandApplicant')
            },

            { // === 상세 ==== //
                path: ':brand_id',
                name: 'BrandDetail',
                component: ()=> import('@/components/BrandContainer/BrandDetail')
            },
        ]
    },// ===== 브랜드관리 - seongh7800 ===== //
]

export default new VueRouter({
    mode: 'history',
    routes
})
