import { createRouter, createWebHistory } from 'vue-router';
import { ROUTES_PATHS } from '@/constants';
import Home from '../pages/Home.vue';
import Cocktail from '../pages/Cocktail.vue';
import CocktailRandom from '../pages/CocktailRandom.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: 'home',
      component: Home,
    },
    {
      path: ROUTES_PATHS.COCKTAIL,
      name: 'cocktail',
      component: Cocktail,
    },
    {
      path: ROUTES_PATHS.COCKTAIL_RANDOM,
      name: 'cocktailRandom',
      component: CocktailRandom,
    },
  ],
});

export default router;
