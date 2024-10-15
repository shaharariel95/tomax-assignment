<script setup>
import { computed } from 'vue';

const props = defineProps(['todo', 'isSelected']);
const emit = defineEmits(['toggle-details', 'delete', 'edit', 'mark-complete']);

const formattedDate = computed(() => {
  return new Date(props.todo.dueDate).toLocaleString();
});

const priorityClass = computed(() => {
  switch (props.todo.priority) {
    case 'high':
      return 'bg-red-500';
    case 'medium':
      return 'bg-yellow-500';
    case 'low':
      return 'bg-green-500';
    default:
      return 'bg-gray-500';
  }
});
</script>

<template>
  <tr class="border-t border-gray-100">
    <td @click="$emit('toggle-details')" :class="['p-4 cursor-pointer text-white', priorityClass]">
      {{ todo.title }}
    </td>
  </tr>
  <tr v-if="isSelected">
    <td colspan="2" class="p-4">
      <div class="text-base">
        <p class="text-start"><strong>Description:</strong> {{ todo.description }}</p>
        <p class="text-start"><strong>Priority:</strong> {{ todo.priority }}</p>
        <p class="text-start"><strong>Due Date:</strong> {{ formattedDate }}</p>
        <p class="text-start"><strong>Completed:</strong> {{ todo.completed ? 'Yes' : 'No' }}</p>
        <button @click="$emit('mark-complete')" class="btn btn-success mr-4 text-base mt-5 p-3">
          {{ todo.completed ? "Completed" : "Mark Complete" }}
        </button>
        <button @click="$emit('edit', todo)" class="btn btn-primary mr-4 text-base">Edit</button>
        <button @click="$emit('delete')" class="btn btn-danger text-base">Delete</button>
      </div>
    </td>
  </tr>
</template>