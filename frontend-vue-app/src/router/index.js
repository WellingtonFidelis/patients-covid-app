import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";

const routes = [
  {
    path: "/",
    name: "create",
    component: () =>
      import("../components/create-patient/CreatePatientComponent"),
  },
  {
    path: "/list-patients",
    name: "list",
    component: () => import("../components/list-patient/ListPatientComponent"),
  },
  {
    path: "/edit-patient/:id",
    name: "update",
    component: () => import("../components/edit-patient/EditPatientComponent"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});
/* maybe to, from params will be used in .afterEach() */
router.afterEach(() => {
  NProgress.done();
});

export default router;
