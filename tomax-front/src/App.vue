<script setup>
import { ref, computed } from 'vue';
import TodoTable from './components/TodoTable.vue';
import AddTodoButton from './components/AddTodoButton.vue';
import AddTodoForm from './components/AddTodoForm.vue';
import { useTodos } from './composables/useTodos';

const { todos, addTodo, deleteTodo, editTodo, markComplete } = useTodos();

const showAddForm = ref(false);
const openAddForm = () => { showAddForm.value = true; };
const closeAddForm = () => { showAddForm.value = false; };
const handleAddTodo = (newTodo) => {
  addTodo(newTodo);
  closeAddForm();
};
const handleEditTodo = (todo) => {
  console.log("Editing todo:", todo);
};

// Filtering logic
const selectedPriorities = ref([]);
const filteredTodos = computed(() => {
  if (selectedPriorities.value.length === 0) {
    return todos.value;
  }
  return todos.value.filter(todo => selectedPriorities.value.includes(todo.priority));
});
const togglePriorityFilter = (priority) => {
  if (selectedPriorities.value.includes(priority)) {
    selectedPriorities.value = selectedPriorities.value.filter(p => p !== priority);
  } else {
    selectedPriorities.value.push(priority);
  }
};
</script>

<template class="p-0">
  <div class="lg:max-w-3xl bg-gray-800 text-white rounded-lg shadow-lg lg:p-8 flex flex-col items-center lg:w-[768px] lg:h-[800px] w-screen h-screen">
    <div class="container mx-auto p-4 flex flex-col items-start lg:space-y-4">
      <h1 class="text-2xl font-bold mb-4 self-center">Todo List</h1>
      <AddTodoButton class="self-end" @click="openAddForm" />

      <!-- Filter Buttons Row -->
      <div class="flex flex-wrap gap-2 mb-4">
        <button
          v-for="priority in ['high', 'medium', 'low']"
          :key="priority"
          @click="togglePriorityFilter(priority)"
          :class="[
            'px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200',
            selectedPriorities.includes(priority) ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-200'
          ]"
        >
          {{ priority.charAt(0).toUpperCase() + priority.slice(1) }}
        </button>
      </div>

      <div class="overflow-auto w-full flex-1">
        <TodoTable 
          :todos="filteredTodos"
          @delete="deleteTodo"
          @edit="handleEditTodo"
          @mark-complete="markComplete"
        />
      </div>
      
      <AddTodoForm 
        v-if="showAddForm"
        @add="handleAddTodo"
        @close="closeAddForm"
      />
    </div>
  </div>
</template>