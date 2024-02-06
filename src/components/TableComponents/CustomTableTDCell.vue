<script setup lang="ts">

</script>

<template>
  <td>
    <slot></slot>
  </td>
</template>

<style scoped lang="scss">
@import "@/assets/scss/styles";
td{
  text-align: center;
}
@include breakpoint(large) {
  td {
    min-width: 100px;
    max-width: 200px;
    height: 44px;
    margin: 14px 14px;
    padding: 14px 14px;
  }
}
</style>