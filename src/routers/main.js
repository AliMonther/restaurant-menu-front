import { createRouter , createWebHistory } from "vue-router/dist/vue-router";
import pagesRouters from './pages'
import addCategory from '../components/add-category/add-category.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [
        ...pagesRouters,
        {
            path: "/add-category",
            name: "addCategory",
            component : addCategory,
        },
    ]
});

export default router;