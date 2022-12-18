import { createRouter,createWebHashHistory } from 'vue-router';


const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [{
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    }],
})

export default router