<script setup>
defineProps({
  task: Object,
})

const store = useStore()
</script>

<template>
  <div
    class="bg-[#f4f4f4] m-[5px] py-[10px] px-[20px] cursor-pointer select-none"
    :class="{ ['border-l-5 border-solid border-[#008000]']: task.reminder }"
    @dblclick="store.toggleReminder(task)"
  >
    <h3 class="flex items-center justify-between">
      {{ task.text }}
      <i-mdi-close-circle
        class="text-[red] min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px]"
        @click="store.deleteTask(task.id)"
      />
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>
