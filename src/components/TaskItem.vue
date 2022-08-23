<script setup>
const props = defineProps({
  task: Object
})

const store = useStore()
</script>

<template>
  <div class="task prevent-select" :class="{ reminder: props.task.reminder }" @dblclick="store.toggleReminder(props.task)">
    <h3>
      {{ props.task.text }}
      <i class="fas fa-times" @click="store.deleteTask(props.task.id)" />
    </h3>
    <p>{{ props.task.day }}</p>
  </div>
</template>

<style scoped>
.fas {
  color: red;
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
