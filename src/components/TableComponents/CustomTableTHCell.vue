<script setup lang="ts">
import {ref} from "vue";
import elemController from "@/elemManipulations/DomElemController";


const element = ref<HTMLTableColElement | undefined>();
</script>

<template>
  <th scope="col" ref="element" @mousemove="elemController.getBorder(element)">
    <slot></slot>
  </th>
</template>

<style scoped lang="scss">
@import "@/assets/scss/styles";
th{
  text-align: center;
}
@include breakpoint(large) {
  th {
    min-width: 100px;
    max-width: 200px;
    height: 44px;
    margin: 14px 14px;
    padding: 14px 14px;
  }
}
</style>