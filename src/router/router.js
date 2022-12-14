import MainPage from '@/pages/MainPage'
import PostPage from '@/pages/PostPage'
import AboutPage from '@/pages/AboutPage'
import PostIdPage from '@/pages/PostIdPage'

import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/vue-post/posts',
        component: PostPage
    },
    {
        path: '/vue-post/about',
        component: AboutPage
    },
    {
        path: '/vue-post/posts/:id',
        component: PostIdPage
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router;