<script setup lang="ts">

</script>

<template>
  <div class="side">
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/styles";
.side {
  display: none;
}
@include breakpoint(large) {
  .side {
    display: block;
    color: white;
    width: 229px;
    height: 850px;
    margin: 0 25px 0 0;
    background-image: radial-gradient(circle at 29% 0, #000, #1c2734 103%);
  }
}
</style>