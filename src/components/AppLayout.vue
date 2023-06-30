<script setup lang="ts">
const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="root">
    <div :style="`background-image: url(${imgUrl})`" class="img"></div>
    <div class="main">
      <el-button class="btn">Get random cocktail</el-button>
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
</style>