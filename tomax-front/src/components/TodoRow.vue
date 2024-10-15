<script setup>
import { computed } from 'vue';

const props = defineProps(['todo', 'isSelected']);
const emit = defineEmits(['toggle-details', 'delete', 'edit', 'mark-complete']);

const formattedDate = computed(() => {
  return new Date(props.todo.dueDate).toLocaleString();
});

const arrowIcon = computed(() => {
  return props.isSelected ? '▼' : '▶';
});
</script>

<template>
  <tr class="border-t border-gray-100 ">
    <td @click="$emit('toggle-details')" class="p-4 cursor-pointer border-r">
      <span class="inline-block w-4 mr-2">{{ arrowIcon }}</span>
      {{ todo.title }}
    </td>
    <td class="p-4">
      <button @click="$emit('delete')" class="btn btn-danger mr-2">Delete</button>
      <button @click="$emit('edit', todo)" class="btn btn-primary mr-2">Edit</button>
      <button @click="$emit('mark-complete')" class="btn btn-success">
        {{ todo.completed ? "Completed" : "Mark Complete" }}
      </button>
    </td>
  </tr>
  <tr v-if="isSelected">
    <td colspan="2" class="p-4 ">
      <div class="text-sm">
        <p><strong>Description:</strong> {{ todo.description }}</p>
        <p><strong>Priority:</strong> {{ todo.priority }}</p>
        <p><strong>Due Date:</strong> {{ formattedDate }}</p>
        <p><strong>Completed:</strong> {{ todo.completed ? 'Yes' : 'No' }}</p>
      </div>
    </td>
  </tr>
</template>