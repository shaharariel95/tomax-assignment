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

// Updated filtering logic
const selectedPriority = ref('all');
const filteredTodos = computed(() => {
  console.log('Current todos:', todos.value); // Debug log
  console.log('Selected priority:', selectedPriority.value); // Debug log
  if (selectedPriority.value === 'all') {
    return todos.value;
  }
  return todos.value.filter(todo => todo.priority === selectedPriority.value);
});
const setPriorityFilter = (priority) => {
  selectedPriority.value = priority;
  console.log('Filter set to:', priority); // Debug log
};
</script>

<template class="p-0">
  <div class="lg:max-w-3xl bg-gray-800 text-white rounded-lg shadow-lg lg:p-8 flex flex-col items-center lg:w-[768px] lg:h-[800px] w-screen h-screen">
    <div class="container mx-auto p-4 flex flex-col items-start lg:space-y-4">
      <h1 class="text-2xl font-bold mb-4 self-center">Todo List</h1>
      <AddTodoButton class="self-end" @click="openAddForm" />

      <!-- Debug info -->
      <div class="text-sm mb-2">
        <p>Total todos: {{ todos.length }}</p>
        <p>Filtered todos: {{ filteredTodos.length }}</p>
        <p>Selected priority: {{ selectedPriority }}</p>
      </div>

      <!-- Updated Filter Buttons Row -->
      <div class="flex flex-wrap gap-2 mb-4">
        <button
          v-for="priority in ['all', 'High', 'Medium', 'Low']"
          :key="priority"
          @click="setPriorityFilter(priority)"
          :class="[
            'px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200',
            selectedPriority === priority ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-200'
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