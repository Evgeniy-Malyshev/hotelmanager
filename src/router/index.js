import Vue from 'vue';
import master from "../components/Master.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/master', component: master}
    ]
});
export default router
