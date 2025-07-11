<script setup lang="ts">
import { useTimerStore } from '../stores/timer-store'
import Button from './Button.vue'
import Tabs from './Tabs/Tabs.vue'

const store = useTimerStore()
</script>

<template>
  <div class="timer">
    <div class="timer-display">
      <Tabs :activeTab="store.timerType" />
      <span class="timer-display-time">{{ store.formattedTime }}</span>
      <Button v-if="store.isRunning" @click="store.skipTimer">Skip</Button>
    </div>
    <div class="timer-controls">
      <Button @click="store.startTimer">Start</Button>
      <Button @click="store.pauseTimer">Pause</Button>
      <Button @click="store.resetTimer">Reset</Button>
    </div>
  </div>
</template>

<style scoped>
.timer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid grey;
  padding: 20px;
  border-radius: 20px;
  height: 300px;
  width: 500px;
  background-color: #4a9782;
}

.timer-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
}

.timer-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff9e5;
}

.timer-display-time {
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 20px;
}

.timer-controls {
  display: flex;
  gap: 10px;
}
</style>
