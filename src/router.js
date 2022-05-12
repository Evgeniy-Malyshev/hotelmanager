import { createRouter, createWebHashHistory } from "vue-router";

import master from "./components/Master.vue";

export default createRouter({
    history: createWebHashHistory (),
    routes: [
        {path: '/master', component: master}
    ]
})