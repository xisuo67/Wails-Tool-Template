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
                    meta: { title: '发现音乐' }
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
        
    ]
})

router.beforeEach(async(to, from, next) => {
    document.title = to.meta?.title as string
    next()
})

export default router
