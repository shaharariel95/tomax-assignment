<!-- <script setup>
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
</template> -->
<script setup>
import AddTodoButton from './components/AddTodoButton.vue';
import Newtable from './components/Newtable.vue'
</script>
<template>
  <!-- <AddTodoButton class="" @click="openAddForm" /> -->
   <!-- <div>
    <h1 class="text-2xl font-bold mb-4 self-center text-white">Todo List</h1>
   </div>
  <div class="w-screen h-screen flex items-center justify-center p-4">
    <div class="w-full h-full max-w-[90%] max-h-[90%] bg-amber-50 rounded-lg shadow-lg overflow-hidden p-4">
      <Newtable/>
    </div>
  </div> -->
  <div class="w-screen h-screen flex items-center justify-center p-4">
  <div class="w-full h-full max-w-[90%] max-h-[90%] bg-amber-50 rounded-lg shadow-lg overflow-hidden p-4">
        <div class="flex justify-between items-center mb-4">
          <div class="w-1/3"></div>
          <h1 class="text-2xl font-bold text-center w-1/3">ToDo List</h1>
          <div class="w-1/3 flex justify-end">
            <AddTodoButton/>
          </div>
        </div>
        <Newtable /> 
      </div>
    </div>
</template>