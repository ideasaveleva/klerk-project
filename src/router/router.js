import PostPage from "@/pages/PostPage";
import PostPageWithStore from "@/pages/PostPageWithStore";
import TestTask from "@/pages/TestTask";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: PostPage,
  },
  {
    path: "/store",
    component: PostPageWithStore,
  },
  {
    path: "/task",
    component: TestTask,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
