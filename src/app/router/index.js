"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_1 = tslib_1.__importDefault(require("vue"));
const vue_router_1 = tslib_1.__importDefault(require("vue-router"));
const Home_vue_1 = tslib_1.__importDefault(require("../views/Home/Home.vue"));
const Commands_vue_1 = tslib_1.__importDefault(require("../views/Commands/Commands.vue"));
const _404_vue_1 = tslib_1.__importDefault(require("../views/404/404.vue"));
const Dashboard_vue_1 = tslib_1.__importDefault(require("../views/Dashboard/Dashboard.vue"));
vue_1.default.use(vue_router_1.default);
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home_vue_1.default
    },
    {
        path: '/commands',
        name: 'Commands',
        component: Commands_vue_1.default
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard_vue_1.default
    },
    {
        path: '*',
        name: '404',
        component: _404_vue_1.default
    }
];
const router = new vue_router_1.default({
    mode: 'history',
    routes
});
exports.default = router;
//# sourceMappingURL=index.js.map