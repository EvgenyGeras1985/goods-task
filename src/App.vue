<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <h1>hello vue 3</h1>
    </header>
  </div>
  <RouterView />
</template>

<style scoped lang="scss">
header {

}


@media (min-width: 1024px) {
  header {

  }
}

</style>
