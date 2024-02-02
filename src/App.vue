<script setup lang="ts">
import MainComponent from "@/components/MainComponent.vue";
// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <main>
      <MainComponent />
    </main>
</template>

<style scoped lang="scss">
@import "@/assets/scss/styles";
main{
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@include breakpoint(large) {
  main{
    flex-direction: row;
  }
}
</style>
