<script setup lang="ts">
import {ref} from 'vue';
import {useEventListener} from "@vueuse/core";

//переменная для отслеживания клика по таблице col
const isTableClick = ref(false);
const element = ref<HTMLTableColElement>();

useEventListener(element, 'mousedown', () => {
    isTableClick.value = !isTableClick.value;
  }
)

useEventListener(element, 'mousemove', (e) => {
  const currentThPos :number = e.clientX;
  isTableClick.value ?
      element.value?.setAttribute("style", `width: ${e.clientX}px`) :
      !isTableClick.value
})

useEventListener(element, 'mouseup', () => {
  isTableClick.value = !isTableClick.value;
})


</script>

<template>
  <th scope="col" ref="element">
      <slot />
  </th>
</template>

<style scoped lang="scss">
@import "@/assets/scss/styles";
th{
  outline: 1px solid black;
}
@include breakpoint(large) {
  th {
    min-width: 10px;
    height: 44px;
  }
}
</style>