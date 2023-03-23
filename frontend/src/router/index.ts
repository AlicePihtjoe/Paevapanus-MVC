import { createRouter, createWebHistory } from 'vue-router';

// Import your components here
// @ts-ignore
import Home from '../views/Home.vue';
// @ts-ignore
import Betting from "../views/Betting.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/panustamine',
        name: 'Betting',
        component: Betting,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
