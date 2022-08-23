<script setup>
defineProps({
  task: Object
})

const store = useStore()
</script>

<template>
  <div class="task prevent-select" :class="{ reminder: task.reminder }" @dblclick="store.toggleReminder(task)">
    <h3>
      {{ task.text }}
      <i-mdi-close-circle class="fas" @click="store.deleteTask(task.id)" />
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<style scoped>
.fas {
  --icon-size: 20px;
  color: red;
  min-width: var(--icon-size);
  min-height: var(--icon-size);
  max-width: var(--icon-size);
  max-height: var(--icon-size);
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
