<script setup lang="ts"></script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  background-color: #004030;
  color: #fff9e5;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    background-color: #fff9e5;
    color: #004030;
  }
}
</style>
