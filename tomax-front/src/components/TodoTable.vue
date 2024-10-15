<script setup>
import { ref } from 'vue';
import TodoRow from './TodoRow.vue';

const props = defineProps(['todos']);
const emit = defineEmits(['delete', 'edit', 'mark-complete']);

const selectedTodo = ref(null);

const toggleDetails = (id) => {
  selectedTodo.value = selectedTodo.value === id ? null : id;
};
</script>

<template>
  <div class="space-y-4 w-full h-full">
    <div v-if="todos.length > 0" class="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <table class="w-full text-sm bg-gray-500">
        <thead class="bg-[#3b3b8f] text-left text-gray-200 rounded-t-lg">
          <tr>
            <th class="p-4 font-medium text-center text-lg">Title</th>
          </tr>
        </thead>
        <tbody>
          <TodoRow 
            v-for="todo in todos" 
            :key="todo.id"
            :todo="todo"
            :is-selected="selectedTodo === todo.id"
            @toggle-details="toggleDetails(todo.id)"
            @delete="$emit('delete', todo.id)"
            @edit="$emit('edit', todo)"
            @mark-complete="$emit('mark-complete', todo.id)"
          />
        </tbody>
      </table>
    </div>
    <p v-else class="text-gray-500 text-center">No todos yet. Add one to get started!</p>
  </div>
</template>