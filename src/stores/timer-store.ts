import { defineStore } from 'pinia'

export enum TimerType {
  POMODORO = 'Pomodoro',
  SHORT_BREAK = 'Short Break',
  LONG_BREAK = 'Long Break',
}

interface TimerState {
  time: number
  isRunning: boolean
  intervalId: number | undefined
  timerType: TimerType
}

const DEFAULT_TIME = 1500

export const useTimerStore = defineStore('timer', {
  state: (): TimerState => ({
    time: DEFAULT_TIME,
    isRunning: false,
    intervalId: undefined,
    timerType: TimerType.POMODORO,
  }),
  getters: {
    formattedTime: (state) => {
      const minutes = Math.floor(state.time / 60)
      const seconds = state.time % 60
      return `${minutes}:${seconds.toString().padStart(2, '0')}`
    },
  },
  actions: {
    startTimer() {
      if (this.isRunning && this.intervalId) {
        return
      }
      this.isRunning = true
      this.intervalId = setInterval(() => {
        if (this.isRunning) {
          this.time--
        }
      }, 1000)
    },
    pauseTimer() {
      this.isRunning = false
      clearInterval(this.intervalId)
    },
    resetTimer() {
      this.isRunning = false
      clearInterval(this.intervalId)
      this.time = DEFAULT_TIME
    },
    skipTimer() {
      this.time = DEFAULT_TIME
      this.isRunning = false
      clearInterval(this.intervalId)
    },

    changeTimerType(timerType: TimerType) {
      this.timerType = timerType
      this.isRunning = false
      clearInterval(this.intervalId)
      if (timerType === TimerType.POMODORO) {
        this.time = DEFAULT_TIME
      } else if (timerType === TimerType.SHORT_BREAK) {
        this.time = 300
      } else if (timerType === TimerType.LONG_BREAK) {
        this.time = 900
      }
    },
  },
})
