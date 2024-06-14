import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/discover',
            children: [
                {
                    path: 'discover',
                    component: () => import('@/views/Discover/index.vue'),
                    meta: { title: '为我推荐' }
                },
                /**
                 * 视频
                 */
                {
                    path: 'video',
                    component: () => import('@/views/Video/index.vue'),
                    meta: { title: '视频' }
                },
            ]
        },
        {
            path: '/community',
            component: Layout,
            meta: { title: '社区' },
            children: [
                {
                    path: 'donation',
                    component: () => import('@/views/Community/Donation/index.vue'),
                    meta: { title: '捐赠明细' }
                },
            ]
        },
        {
            path: '/common',
            component: Layout,
            meta: { title: '公共' },
            children: [
                {
                    path: 'settings',
                    component: () => import('@/views/common/settings/index.vue'),
                    meta: { title: '系统设置' }
                },
            ]
        },
    ]
})

router.beforeEach(async(to, from, next) => {
    document.title = to.meta?.title as string
    next()
})

export default router
