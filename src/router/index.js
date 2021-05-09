import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Voting from "../views/Voting.vue";
import Breeds from "../views/Breeds.vue";
import Gallery from "../views/Gallery.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/voting",
    name: "Voting",
    component: Voting
  },
  {
    path: "/breeds",
    name: "Breeds",
    component: Breeds
  },
    {
    path: "/gallery",
    name: "Gallery",
    component: Gallery
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;