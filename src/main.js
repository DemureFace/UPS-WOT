import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const upsWotApp = createApp(App);

upsWotApp.use(store);
upsWotApp.use(router);
upsWotApp.mount("#app");
