<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add', 'close']);

const newTodo = ref({
  title: '',
  description: '',
  priority: 'Medium',
  dueDate: '',
  completed: false
});

const submitForm = () => {
  emit('add', { ...newTodo.value, id: Date.now().toString() });
  newTodo.value = {
    title: '',
    description: '',
    priority: 'Medium',
    dueDate: '',
    completed: false
  };
};
</script>

<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
    <div class="relative bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-xl p-8 m-4 max-w-xl w-full">
      <h2 class="text-2xl font-bold mb-4">Add New Todo</h2>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label for="title" class="block text-start text-basic font-semibold text-gray-800">Title</label>
          <input type="text" id="title" v-model="newTodo.title" required
                 class="mt-1 block w-full rounded-md bg-amber-50 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        </div>
        <div>
          <label for="description" class="block text-start text-basic font-semibold text-gray-800">Description</label>
          <textarea id="description" v-model="newTodo.description" rows="3"
                    class="mt-1 block w-full rounded-md bg-amber-50 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
        </div>
        <div>
          <label for="priority" class="block text-start text-basic font-semibold text-gray-800">Priority</label>
          <select id="priority" v-model="newTodo.priority"
                  class="mt-1 block w-full rounded-md bg-amber-50 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option>High</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <div>
          <label for="dueDate" class="block text-start text-basic font-semibold text-gray-800">Due Date</label>
          <input type="datetime-local" id="dueDate" v-model="newTodo.dueDate"
                 class="mt-1 block w-full rounded-md bg-amber-50 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        </div>
        <div class="flex justify-end space-x-2">
          <button type="button" @click="$emit('close')" class="btn btn-danger text-gray-800">Cancel</button>
          <button type="submit" class="btn btn-primary text-gray-800">Add Todo</button>
        </div>
      </form>
    </div>
  </div>
</template>