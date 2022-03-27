/*
 * @Date: 2022-03-21 14:28:20
 * @LastEditors: dwj18066042960
 * @FilePath: \Test\src\router.js
 */

import { createRouter, createWebHistory } from "vue-router";
import A from "./pages/A.vue";
const routes = [
  {
    path: "/",
    name: "Index",
    component: A,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
