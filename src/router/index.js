import TokenService from "@/services/storage.service";
import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/todo",
    name: "todo",
    component: () => import("@/views/TodoView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = TokenService.getToken();

  if (!isAuthenticated && to.name !== "login") {
    next({ name: "login" });
  } else if (isAuthenticated && to.name === "login") {
    next({ name: from?.name || "todo" });
  } else {
    next();
  }
});

export default router;
