import { createApp } from "vue";
import App from "./App.vue";

import store from "@/store";

import "@/index.css";
import router from "./router/router";

createApp(App).use(store).use(router).mount("#app");
// createApp(App).use(store).mount('#app');
