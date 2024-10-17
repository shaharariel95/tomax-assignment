<script setup>
import { ref, computed } from 'vue';
import editIcon from '../assets/edit-svgrepo-com.svg';
import deleteIcon from '../assets/delete-svgrepo-com.svg';
import highPriorityIcon from '../assets/high-priority.svg';
import mediumPriorityIcon from '../assets/medium-priority.svg';
import lowPriorityIcon from '../assets/low-priority.svg';

const tasks = ref([
  { priority: 'High', title: 'build the backend for the Tomax assignment', description: 'Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv' , dueDate: '2024-10-20', completed: false },
  { priority: 'Medium', title: 'Task 2', description: 'Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv', dueDate: '2024-10-21', completed: true },
  { priority: 'Medium', title: 'Task 3', description: 'Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv', dueDate: '2024-10-22', completed: true },
  { priority: 'Low', title: 'Task 4', description: 'Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv', dueDate: '2024-10-23', completed: true },
  { priority: 'High', title: 'Task 5', description: 'Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv', dueDate: '2024-10-24', completed: true },
  { priority: 'Medium', title: 'Task 6', description: 'Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv', dueDate: '2024-10-25', completed: false },
  { priority: 'Medium', title: 'Task 7', description: 'Team meeting a;fjvalerjvb slf Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvjba;lfja;lkjfd a;jdfba;jrf s', dueDate: '2024-10-26', completed: true },
  { priority: 'Medium', title: 'Task 8', description: 'Te Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvam meeting a;fjvalerjvb slfjba;lfja;lkjfd a;jdfba;jrf s', dueDate: '2024-10-27', completed: false },
  { priority: 'Low', title: 'Task 9', description: 'Team meeting a;fjvalerjvb slfjba;lfja;lkjfd a;jdFinish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvfba;jrf s', dueDate: '2024-10-28', completed: true },
  { priority: 'High', title: 'Task 10', description: 'Team meeting a;fjvalerjvb sFinish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvlfjba;lfja;lkjfd a;jdfba;jrf s', dueDate: '2024-10-29', completed: false },
]);

const currentPage = ref(1);
const itemsPerPage = 8;
const sortBy = ref('priority');
const sortOrder = ref('asc');

const sortedTasks = computed(() => {
  return [...tasks.value].sort((a, b) => {
    if (sortBy.value === 'priority') {
      const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
      return sortOrder.value === 'asc' 
        ? priorityOrder[a.priority] - priorityOrder[b.priority]
        : priorityOrder[b.priority] - priorityOrder[a.priority];
    } else if (sortBy.value === 'dueDate') {
      return sortOrder.value === 'asc' 
        ? new Date(a.dueDate) - new Date(b.dueDate)
        : new Date(b.dueDate) - new Date(a.dueDate);
    } else if (sortBy.value === 'status') {
      return sortOrder.value === 'asc' 
        ? a.completed - b.completed
        : b.completed - a.completed;
    }
    return 0;
  });
});

const paginatedTasks = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return sortedTasks.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(tasks.value.length / itemsPerPage));

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
}

</script>

<template>
  <div class="overflow-x-auto">
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
        <tr v-for="(task, index) in paginatedTasks" :key="index">
          <td class="border-b-2 border-black p-4 text-red-600 font-semibold border-l-2">
            <div class="flex text-center items-center justify-center">
              <img 
                v-if="task.priority === 'High'" 
                :src="highPriorityIcon" 
                class="w-8" 
                alt="High Priority"
              />
              <img 
                v-else-if="task.priority === 'Medium'" 
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
          <td class="border-b-2 border-black p-4">{{ task.title }}</td>
          <td class="border-b-2 border-black p-2 font-semibold  ">
            <div class='max-h-14 overflow-y-auto text-start'>
                {{ task.description }}
            </div>
          </td>
          <td class="border-b-2 border-black p-4">{{ task.dueDate }}</td>
          <td class="border-b-2 border-black p-4">
            <button class="btn btn-success">
              <img class="w-5 text-center" src='../assets/square-check-svgrepo-com.svg' />
            </button>
          </td>
          <td class="border-b-2 border-r-2 border-black w-min text-center">
            <button class="btn btn-primary mr-3 text-base"><img class="w-5" :src="editIcon"/></button>
            <button class="btn btn-danger text-base"><img class="w-5" :src='deleteIcon'/></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="mt-4 flex justify-center">
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