import { defineStore } from 'pinia';
import axios from 'axios';
import { INGREDIENTS_URL, COCKTAILS_BY_ING_URL } from '@/constants';
import type { Ingredient } from '@/types/Ingridient';
import type { Cocktail } from '@/types/Cocktail';

type State = {
  ingredients: Ingredient[];
  cocktails: Cocktail[];
};

export const useRootStore = defineStore('root', {
  state: (): State => ({
    ingredients: [],
    cocktails: [],
  }),
  actions: {
    async getIngredients() {
      const data = await axios.get(INGREDIENTS_URL);
      this.ingredients = data?.data?.drinks;
    },
    async getCocktails(ingredient: Ingredient | null) {
      const data = await axios.get(`${COCKTAILS_BY_ING_URL}${ingredient}`);
      this.cocktails = data?.data?.drinks;
    },
  },
});
