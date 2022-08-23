<script setup>
const props = defineProps({
  text: String,
  color: String,
})
</script>

<template>
  <button class="btn" :style="{ background: props.color }">
    {{ props.text }}
  </button>
</template>
