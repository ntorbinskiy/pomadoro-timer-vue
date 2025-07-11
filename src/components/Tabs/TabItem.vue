<script setup lang="ts">
import { TimerType, useTimerStore } from '@/stores/timer-store'
import Button from '../Button.vue'

const props = defineProps<{
  activeTab: TimerType
  tab: TimerType
}>()

const store = useTimerStore()
</script>

<template>
  <Button
    class="tab-item"
    :class="{ active: props.activeTab === props.tab }"
    @click="store.changeTimerType(props.tab)"
  >
    {{ props.tab }}
  </Button>
</template>

<style scoped>
.tab-item {
  padding: 10px;
  background-color: transparent;
  border: none;
  color: #fff9e5;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.active {
  background-color: #fff9e5;
  color: #4a9782;
}
</style>
