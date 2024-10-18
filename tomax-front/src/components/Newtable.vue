<script setup>
import { ref, computed } from 'vue';
import editIcon from '../assets/edit-svgrepo-com.svg';
import deleteIcon from '../assets/delete-svgrepo-com.svg';
import highPriorityIcon from '../assets/high-priority.svg';
import mediumPriorityIcon from '../assets/medium-priority.svg';
import lowPriorityIcon from '../assets/low-priority.svg';
import checked_square from '../assets/square-check-svgrepo-com.svg'
import square from '../assets/square-svgrepo-com.svg'

const props = defineProps({
  todos: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['delete', 'edit', 'mark-complete']);


const currentPage = ref(1);
const itemsPerPage = 7;
const sortBy = ref('priority');
const sortOrder = ref('desc');
const showPopup = ref(false);
const selectedTodo = ref(null);


const sortedTodos = computed(() => {
  return [...props.todos].sort((a, b) => {
    if (sortBy.value === 'priority') {
      const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
      return sortOrder.value === 'asc' 
        ? priorityOrder[a.priority] - priorityOrder[b.priority]
        : priorityOrder[b.priority] - priorityOrder[a.priority];
    } else if (sortBy.value === 'dueDate') {
        const dateA = new Date(a.dueDate).getTime();
        const dateB = new Date(b.dueDate).getTime();
        return sortOrder.value === 'asc' ? dateA - dateB : dateB - dateA;
    } else if (sortBy.value === 'status') {
        const statusA = a.completed ? 1 : 0;
        const statusB = b.completed ? 1 : 0;
        return sortOrder.value === 'asc' ? statusA - statusB : statusB - statusA;
    }
    return 0;
  });
});

const paginatedTodos = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginated = sortedTodos.value.slice(startIndex, endIndex);
  return paginated;
});

const totalPages = computed(() => Math.ceil(sortedTodos.value.length / itemsPerPage));

function changePage(page) {
  currentPage.value = page;
}

function toggleSort(column) {
  if (sortBy.value === column) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortBy.value = column;
    sortOrder.value = 'asc';
  }
  currentPage.value = 1;

}

function openPopup(todo) {
  selectedTodo.value = todo;
  showPopup.value = true;
}

function closePopup() {
  showPopup.value = false;
  selectedTodo.value = null;
}
</script>

<template>
    <div class="flex flex-col h-screen">
      <div v-if="props.todos.length === 0" class="text-center py-4">
        No todos available. Add a new todo to get started!
      </div>
      <div v-else class="flex-grow overflow-auto pb-16">
        <!-- Desktop view -->
        <div class="hidden md:block">
          <table class="w-full border-collapse text-lg">
            <thead class="bg-gray-200">
              <tr>
                <th @click="toggleSort('priority')" class="border-2 border-black p-4 w-[8%] cursor-pointer">
                  Priority
                  <span v-if="sortBy === 'priority'">&nbsp;{{ sortOrder === 'asc' ? '▲' : '▼' }}</span>
                  <span v-else>&nbsp;♦</span>
                </th>
                <th class="border-2 border-black p-4 w-[23%]">Title</th>
                <th class="border-2 border-black p-4 w-[47%]">Description</th>
                <th @click="toggleSort('dueDate')" class="border-2 border-black p-4 w-[10%] cursor-pointer">
                  Due Date
                  <span v-if="sortBy === 'dueDate'">&nbsp;{{ sortOrder === 'asc' ? '▲' : '▼' }}</span>
                  <span v-else>&nbsp;♦</span>
                </th>
                <th @click="toggleSort('status')" class="border-2 border-black p-4 w-[7%] cursor-pointer">
                  Status
                  <span v-if="sortBy === 'status'">&nbsp;{{ sortOrder === 'asc' ? '▲' : '▼' }}</span>
                  <span v-else>&nbsp;♦</span>
                </th>
                <th class="border-2 border-black p-4 w-[5%]">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="todo in paginatedTodos" :key="todo.id">
                <td class="border-b-2 border-black p-4 text-red-600 font-semibold border-l-2">
                  <div class="flex items-center justify-center">
                    <img 
                      v-if="todo.priority === 'High'" 
                      :src="highPriorityIcon" 
                      class="w-8" 
                      alt="High Priority"
                    />
                    <img 
                      v-else-if="todo.priority === 'Medium'" 
                      :src="mediumPriorityIcon" 
                      class="w-8" 
                      alt="Medium Priority"
                    />
                    <img 
                      v-else 
                      :src="lowPriorityIcon" 
                      class="w-8" 
                      alt="Low Priority"
                    />
                  </div>
                </td>
                <td class="border-b-2 border-black p-4">{{ todo.title }}</td>
                <td class="border-b-2 border-black p-2 font-semibold">
                  <div class='max-h-14 overflow-y-auto text-start'>
                    {{ todo.description }}
                  </div>
                </td>
                <td class="border-b-2 border-black p-4">
                  {{ new Date(todo.dueDate).toLocaleString('en-US', {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                  }) }}
                </td>
                <td class="border-b-2 border-black p-4">
                  <button class="p-0 mt-1" @click="emit('mark-complete', todo.id)">
                    <img class="w-10 p-0 text-center" :src="todo.completed ? checked_square : square" />
                  </button>
                </td>
                <td class="border-b-2 border-r-2 border-black w-min text-center">
                  <button class="p-1" @click="emit('delete', todo.id)">
                    <img class="w-8" :src='deleteIcon'/>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Mobile view -->
        <div class="md:hidden">
          <!-- Mobile sorting buttons -->
          <div class="flex justify-around bg-gray-200 p-2 sticky top-0 z-10">
            sort:
            <button @click="toggleSort('priority')" class="px-2 py-1 text-sm font-semibold">
              Priority
              <span v-if="sortBy === 'priority'">{{ sortOrder === 'asc' ? '▲' : '▼' }}</span>
            </button>
            <button @click="toggleSort('dueDate')" class="px-2 py-1 text-sm font-semibold">
              Due Date
              <span v-if="sortBy === 'dueDate'">{{ sortOrder === 'asc' ? '▲' : '▼' }}</span>
            </button>
            <button @click="toggleSort('status')" class="px-2 py-1 text-sm font-semibold">
              Status
              <span v-if="sortBy === 'status'">{{ sortOrder === 'asc' ? '▲' : '▼' }}</span>
            </button>
          </div>
          
          <!-- Mobile todo list -->
          <div v-for="todo in paginatedTodos" :key="todo.id" class="border-b-2 border-black p-4 flex items-center justify-between">
            <div class="flex items-center">
              <img 
                :src="todo.priority === 'High' ? highPriorityIcon : todo.priority === 'Medium' ? mediumPriorityIcon : lowPriorityIcon"
                class="w-8 mr-2"
                :alt="`${todo.priority} Priority`"
              />
              <span class="font-semibold">{{ todo.title }}</span>
            </div>
            <div class="flex items-center min-w-20">
              <button class="p-0 mr-2" @click="emit('mark-complete', todo.id)">
                <img class="w-8" :src="todo.completed ? checked_square : square" />
              </button>
              <button class="p-1" @click="openPopup(todo)">
                <img class="w-6" :src="editIcon" alt="View Details" />
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Pagination -->
      <div v-if="totalPages > 1" class="fixed bottom-0 left-0 right-0 bg-white py-4 flex justify-center">
        <button 
          v-for="page in totalPages" 
          :key="page" 
          @click="changePage(page)" 
          :class="['mx-1 px-3 py-1 border rounded', currentPage === page ? 'bg-blue-500 text-white' : 'bg-white']"
        >
          {{ page }}
        </button>
      </div>
  
      <!-- Popup for mobile view -->
      <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-lg p-6 max-w-sm w-full">
          <h2 class="text-xl font-bold mb-4">{{ selectedTodo.title }}</h2>
          <p class="mb-2"><strong>Priority:</strong> {{ selectedTodo.priority }}</p>
          <p class="mb-2"><strong>Description:</strong> {{ selectedTodo.description }}</p>
          <p class="mb-2"><strong>Due Date:</strong> {{ new Date(selectedTodo.dueDate).toLocaleString() }}</p>
          <p class="mb-4"><strong>Status:</strong> {{ selectedTodo.completed ? 'Completed' : 'Pending' }} </p>
          <div class="flex justify-end">
            <button @click="emit('delete', selectedTodo.id)" class="bg-red-500 text-white px-4 py-2 rounded mr-2">Delete</button>
            <button @click="closePopup" class="bg-gray-300 px-4 py-2 rounded">Close</button>
          </div>
        </div>
      </div>
    </div>
  </template>