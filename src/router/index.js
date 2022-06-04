import Vue from 'vue';
import ShowRoom from "../components/ShowRoom.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/showroom', component: ShowRoom}
    ]
});
export default router
