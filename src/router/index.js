import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/Index.vue";
import OrderListView from '@/views/OrderList.vue'

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/index",
    component: OrderListView,
  },
  {
    path: "/login",
    component: OrderListView,
  },
  {
    path: "/orderList",
    component: OrderListView,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//需要login才能访问
router.beforeEach((to, from, next) => {
  // let user = sessionStorage.getItem("user");
  // if (
  //   ![
  //     "/",
  //     "/index",
  //     "/businessList",
  //     "/businessInfo",
  //     "login",
  //     "register",
  //   ].includes(to.path)
  // ) {
  //   if (user === null) {
  //       router.push('/login')
  //       location.reload()
  //   }
  // }
  next();
});
export default router;
