<script setup lang="ts">
import Timer from './components/Timer.vue'
</script>

<template>
  <main>
    <div class="container">
      <Timer />
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
