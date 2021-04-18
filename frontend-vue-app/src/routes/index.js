import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import("../components/pages/home/HomeComponent"),
  },
  {
    path: "/create-patient",
    name: "create",
    component: () =>
      import("../components/pages/create-patient/CreatePatientComponent"),
  },
  {
    path: "/list-patients",
    name: "list",
    component: () =>
      import("../components/pages/list-patient/ListPatientComponent"),
  },
  {
    path: "/edit-patient/:id",
    name: "update",
    component: () =>
      import("../components/pages/edit-patient/EditPatientComponent"),
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
