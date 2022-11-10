import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/',
        component: () => import('@/pages/Home.vue'),
    },
    {
        path: '/favorites',
        component: () => import('@/pages/Favorites.vue'),
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;