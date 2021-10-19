import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Pod from '/src/components/pod.vue'
import Ep from '/src/components/ep.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/pod/:id',
        name: 'pod',
        component: Pod,
    },
    {
        path: '/pod/:id/ep/:epId',
        name: 'ep',
        component: Ep,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router