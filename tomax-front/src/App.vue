<script setup>
import { ref } from 'vue';
import TodoTable from './components/TodoTable.vue';
import AddTodoButton from './components/AddTodoButton.vue';
import AddTodoForm from './components/AddTodoForm.vue';
import { useTodos } from './composables/useTodos';

const { todos, addTodo, deleteTodo, editTodo, markComplete } = useTodos();

const showAddForm = ref(false);

const openAddForm = () => {
  showAddForm.value = true;
};

const closeAddForm = () => {
  showAddForm.value = false;
};

const handleAddTodo = (newTodo) => {
  addTodo(newTodo);
  closeAddForm();
};

const handleEditTodo = (todo) => {
  // Implement edit functionality
  console.log("Editing todo:", todo);
};
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Todo List</h1>
    <AddTodoButton @click="openAddForm" />
    <TodoTable 
      :todos="todos"
      @delete="deleteTodo"
      @edit="handleEditTodo"
      @mark-complete="markComplete"
    />
    <AddTodoForm 
      v-if="showAddForm"
      @add="handleAddTodo"
      @close="closeAddForm"
    />
  </div>
</template>