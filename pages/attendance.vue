<template>
  <div class="container my-4">
    <h2>Attendance List</h2>
    <form @submit.prevent="addAttendance">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="name" required>
      </div>
      <div class="mb-3">
        <label for="date" class="form-label">Date</label>
        <input type="date" class="form-control" id="date" v-model="date" required>
      </div>
      <button type="submit" class="btn btn-primary">Add Attendance</button>
    </form>

    <AttendanceTable :entries="attendanceList" @remove="removeAttendance" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAttendanceStore } from '~/store/attendance'
import AttendanceTable from '~/components/AttendanceTable.vue'

const name = ref('')
const date = ref(new Date().toISOString().substr(0, 10))

const store = useAttendanceStore()

const attendanceList = computed(() => store.attendanceList)

function addAttendance() {
  if (name.value && date.value) {
    store.addAttendance({ name: name.value, date: date.value })
    name.value = ''
    date.value = new Date().toISOString().substr(0, 10)
  }
}

function removeAttendance(index) {
  store.removeAttendance(index)
}
</script>