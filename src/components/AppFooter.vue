<script setup>
const store = useStore()
</script>

<template>
  <footer class="mt-[30px] text-center">
    <p>Copyright &copy; 2021</p>
    <RouterLink v-if="store.homePage" to="about" class="text-[#333]">
      About
    </RouterLink>
    <RouterLink v-else to="/">
      Home
    </RouterLink>
  </footer>
</template>
