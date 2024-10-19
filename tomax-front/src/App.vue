<script setup>
import { ref, computed } from 'vue';
import AddTodoButton from './components/AddTodoButton.vue';
import TodoTable from './components/TodoTable.vue';
import AddTodoForm from './components/AddTodoForm.vue';
import { useTodos } from './composables/useTodos';

const { todos, error, addTodo, deleteTodo, editTodo, markComplete } = useTodos();

const showAddForm = ref(false);
const openAddForm = () => { showAddForm.value = true; };
const closeAddForm = () => { showAddForm.value = false; };
const handleAddTodo = (newTodo) => {
  addTodo(newTodo);
  closeAddForm();
};

const showError = computed(() => !!error.value);
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-300 to-gray-500">
    <div class="w-screen h-screen sm:h-auto sm:min-h-screen sm:p-4 sm:flex sm:items-center sm:justify-center">
      <div class="w-full h-screen sm:w-[95%] sm:h-[95%] bg-amber-50 sm:rounded-lg sm:shadow-lg overflow-hidden flex flex-col">
        <div class="flex items-center justify-between p-4 bg-amber-50 border-b border-amber-50">
          <h1 class="text-2xl sm:text-4xl font-bold inline-flex items-center">
            <img class="w-6 sm:w-10 mr-2" src="./assets/edit-svgrepo-com.svg" alt="Edit icon" />
            ToDo List
          </h1>
          <div class="flex items-center space-x-2">
            <span class="font-bold text-sm sm:text-xl">add</span>
            <AddTodoButton @click="openAddForm" />
          </div>
        </div>
        
        <div class="flex-grow overflow-auto p-4">
          <TodoTable :todos="todos" @delete="deleteTodo" @edit="editTodo" @mark-complete="markComplete" />
        </div>
      </div>
    </div>
  </div>

  <div v-if="showError" class="fixed inset-0 m-4 sm:m-40 w-auto h-fit bg-amber-300 border border-amber-500 text-amber-800 px-4 py-3 rounded mb-4 flex justify-center items-center" role="alert">
    <div>
      <strong class="font-bold">Error:</strong>
      <span class="block sm:inline">{{ error }}</span>
    </div>
    <button class="absolute top-2 right-2 w-14 text-center" @click="error = null">x</button>
  </div>

  <AddTodoForm 
    v-if="showAddForm"
    @add="handleAddTodo"
    @close="closeAddForm"
  />
</template>