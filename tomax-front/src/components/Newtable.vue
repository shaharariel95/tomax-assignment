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
</script>

<template>
  <div v-if="props.todos.length === 0" class="text-center py-4">
    No todos available. Add a new todo to get started!
  </div>
  <div v-else class="overflow-x-auto">
    <table class="w-full border-collapse text-lg rounded-sm table-auto">
      <thead class="bg-gray-200 h-1 text-xl">
        <tr>
          <th @click="toggleSort('priority')" class="border-2 border-black p-4 w-[5%] cursor-pointer">
            Priority
            <span v-if="sortBy === 'priority'">&nbsp;{{ sortOrder === 'asc' ? '▲' : '▼' }}</span>
          </th>
          <th class="border-2 border-black p-4 w-[25%]">Title</th>
          <th class="border-2 border-black p-4 w-[45%]">Description</th>
          <th @click="toggleSort('dueDate')" class="border-2 border-black p-4 w-[10%] cursor-pointer">
            Due Date
            <span v-if="sortBy === 'dueDate'">&nbsp;{{ sortOrder === 'asc' ? '▲' : '▼' }}</span>
          </th>
          <th @click="toggleSort('status')" class="border-2 border-black p-4 w-[5%] cursor-pointer">
            Status
            <span v-if="sortBy === 'status'">&nbsp;{{ sortOrder === 'asc' ? '▲' : '▼' }}</span>
          </th>
          <th class="border-2 border-black p-4 w-[10%]">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in paginatedTodos" :key="todo.id">
          <td class="border-b-2 border-black p-4 text-red-600 font-semibold border-l-2">
            <div class="flex text-center items-center justify-center">
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
            <button class="btn btn-success p-0 mt-1" @click="emit('mark-complete', todo.id)">
              <img class="w-10 p-0 text-center" :src="todo.completed ? checked_square : square" />
            </button>
          </td>
          <td class="border-b-2 border-r-2 border-black w-min text-center">
            <button class="btn btn-primary mr-3 text-base" @click="emit('edit', todo.id)"><img class="w-5" :src="editIcon"/></button>
            <button class="btn btn-danger text-base" @click="emit('delete', todo.id)"><img class="w-5" :src='deleteIcon'/></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="totalPages > 1" class="mt-auto py-4 flex justify-center">
    <button 
      v-for="page in totalPages" 
      :key="page" 
      @click="changePage(page)" 
      :class="['mx-1 px-3 py-1 border rounded', currentPage === page ? 'bg-blue-500 text-white' : 'bg-white']"
    >
      {{ page }}
    </button>
  </div>
</template>