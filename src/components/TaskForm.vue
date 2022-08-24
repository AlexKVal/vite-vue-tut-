<script setup>
const text = ref('')
const day = ref('')
const reminder = ref(false)

const store = useStore()

function onSubmit() {
  // validation
  if (!text.value) {
    alert('Please enter a Task')
    return
  }

  // new object
  const newTask = {
    // id: Math.floor(Math.random() * 100000), // not needed anymore, b/c of the backend
    text: text.value,
    day: day.value,
    reminder: reminder.value,
  }

  // store it
  store.addTask(newTask)

  // clear the form
  text.value = ''
  day.value = ''
  reminder.value = false
}
</script>

<template>
  <form class="mb-[40px]" @submit.prevent="onSubmit">
    <div class="mx-[0] my-[20px]">
      <label class="block">Task</label>
      <input v-model="text" type="text" name="text" placeholder="Add Task"
        class="w-full h-[40px] m-[5px] py-[3px] px-[7px] text-[17px] flex-[2] h-[20px]">
    </div>
    <div class="mx-[0] my-[20px]">
      <label class="block">Day & Time</label>
      <input v-model="day" type="text" name="day" placeholder="Add Day & Time"
        class="w-full h-[40px] m-[5px] py-[3px] px-[7px] text-[17px] flex-[2] h-[20px]">
    </div>
    <div class="mx-[0] my-[20px] flex items-center justify-between">
      <label class="block flex-1">Set Reminder</label>
      <input v-model="reminder" type="checkbox" name="reminder"
        class="w-full h-[40px] m-[5px] py-[3px] px-[7px] text-[17px] flex-[2] h-[20px]">
    </div>

    <input type="submit" value="Save Task"
      class="inline-block bg-black text-white border-none py-[10px] px-[20px] m-[5px] rounded-[5px] cursor-pointer decoration-none text-[15px] block w-full focus:outline-none active:scale-98">
  </form>
</template>
