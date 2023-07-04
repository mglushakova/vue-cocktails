<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { Back } from '@element-plus/icons-vue';
import { computed } from 'vue';
import { ROUTES_PATHS } from '@/constants';

const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
  backFunc: {
    type: Function,
    required: true,
  },
  isBackButtonVisible: {
    type: Boolean,
    default: true,
  },
});

const route = useRoute();
const router = useRouter();

const routeName = computed(() => route.name);

function goForCocktailRandom() {
  router.push(ROUTES_PATHS.COCKTAIL_RANDOM);

  if (routeName.value === ROUTES_PATHS.COCKTAIL_RANDOM) {
    router.go();
  }
}
</script>

<template>
  <div class="root">
    <div :style="`background-image: url(${imgUrl})`" class="img"></div>
    <div class="main">
      <div class="btns">
        <el-button
          v-if="isBackButtonVisible"
          type="primary"
          :icon="Back"
          circle
          class="back"
          @click="backFunc"
        />
        <el-button class="btn" @click="goForCocktailRandom"
          >Get random cocktail</el-button
        >
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.root {
  display: flex;
  min-height: 100vh;
  background-color: $background-color;
}

.img {
  width: 50%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}

.main {
  position: relative;
  width: 50%;
  padding: 32px 40px;
}

.btn {
  position: absolute;
  top: 32px;
  right: 40px;
  font-size: 16px;
  font-family: 'Raleway', 'Arial', sans-serif;
  background-color: $accent-color;
  border: none;
  color: $white-color;

  &:hover,
  &:active,
  &:focus {
    background-color: darken($accent-color, 10%);
    transition: background-color 0.3s ease;
  }
}

.btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back {
  background-color: transparent;
  border-color: $white-color;
  transition: border-color 0.3s ease;

  &:hover,
  &:focus {
    border-color: $accent-color;
  }
}
</style>
