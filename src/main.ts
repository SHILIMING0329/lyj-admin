import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setupStore } from "./store";
import router from "./router/index";
const app = createApp(App);
// 配置状态管理器
setupStore(app);
// 配置路由
app.use(router);
app.mount("#app");
