<script setup lang="ts">
import { TimerType } from '@/stores/timer-store'
import TabItem from './TabItem.vue'

const props = defineProps<{
  activeTab: TimerType
}>()
</script>

<template>
  <div class="tabs">
    <TabItem :activeTab="props.activeTab" :tab="TimerType.POMODORO" />
    <TabItem :activeTab="props.activeTab" :tab="TimerType.SHORT_BREAK" />
    <TabItem :activeTab="props.activeTab" :tab="TimerType.LONG_BREAK" />
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
