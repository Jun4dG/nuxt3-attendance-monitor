import { defineStore } from 'pinia'

export const useAttendanceStore = defineStore('attendance', {
  state: () => ({
    attendanceList: []
  }),
  actions: {
    addAttendance(entry) {
      this.attendanceList.push(entry)
    },
    removeAttendance(index) {
      this.attendanceList.splice(index, 1)
    }
  },
  getters: {
    getAttendanceList: (state) => state.attendanceList
  }
})
