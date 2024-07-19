<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Date</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, index) in entries" :key="index">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ entry.name }}</td>
        <td>{{ entry.date }}</td>
        <td>
          <button class="btn btn-danger btn-sm" @click="$emit('remove', index)">Remove</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps({
  entries: {
    type: Array,
    required: true,
  },
});
</script>