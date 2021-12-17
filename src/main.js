import { createApp } from "vue";
import App from "./App.vue";

import store from "@/store";

import "@/index.css";
import router from "./router/router";

import "remixicon/fonts/remixicon.css";

createApp(App).use(store).use(router).mount("#app");
// createApp(App).use(store).mount('#app');
