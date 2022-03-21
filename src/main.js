/*
 * @Date: 2022-03-21 13:58:42
 * @LastEditors: dwj18066042960
 * @FilePath: \Test\src\main.js
 */
import { createApp } from "vue";
import "./App.css";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);
app.use(router);
app.mount("#app");
