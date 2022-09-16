import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/dashboard/Home.vue';
import Gallery from '../views/gallery/Index.vue';
import GalleryCreate from '../views/gallery/Create.vue';

import Rooms from '../views/rooms/Index.vue';
import RoomsCreate from '../views/rooms/Create.vue';

import Reservations from '../views/reservations/Index.vue';
import ReservationsCreate from '../views/reservations/Create.vue';

import Users from '../views/users/Index.vue';
import UsersCreateEdit from '../views/users/CreateEdit.vue';
import store from '../store';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/gallery',
    component: Gallery,
  },
  {
    path: '/gallery/create',
    component: GalleryCreate,
  },
  {
    path: '/users',
    component: Users,
  },
  {
    path: '/users/create',
    component: UsersCreateEdit,
  },
  {
    path: '/users/:id',
    component: UsersCreateEdit,
  },

  {
    path: '/rooms',
    component: Rooms,
  },
  {
    path: '/rooms/create',
    component: RoomsCreate,
  },

  {
    path: '/reservations',
    component: Reservations,
  },
  {
    path: '/reservations/:id',
    component: ReservationsCreate,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAdmin = store.getters['system/isAdmin'];
  if (isAdmin) {
    next();
  } else {
    window.location.href = 'http://booking-dev.test/';
  }
});

export default router;
