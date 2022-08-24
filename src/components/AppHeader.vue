<script setup>
defineProps({
  title: {
    type: String,
    default: 'Hello World',
  },
})

const route = useRoute()
const homePage = computed(() => route.path == '/')

const store = useStore()
const buttonText = computed(() => (store.showTaskForm ? 'Close' : 'Add Task'))
const buttonColor = computed(() => (store.showTaskForm ? 'red' : 'green'))
</script>

<template>
  <header class="flex justify-between items-center mb-[20px]">
    <h1>{{ title }}</h1>
    <ToggleButton
      v-show="homePage"
      :text="buttonText"
      :color="buttonColor"
      @click="store.toggleAddTask"
    />
  </header>
</template>
