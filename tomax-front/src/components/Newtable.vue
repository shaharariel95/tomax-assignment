<script setup>
import editIcon from '../assets/edit-svgrepo-com.svg';
import deleteIcon from '../assets/delete-svgrepo-com.svg';


const tasks = [
  { priority: 'High', title: 'Task 1', description: 'Finish report', dueDate: '2024-10-20', completed: false },
  { priority: 'Medium', title: 'Task 2', description: 'Team meeting', dueDate: '2024-10-21', completed: true },
  // Add more tasks as needed
];
</script>

<template>
    <table class="w-full border-collapse text-lg">
        <thead class="bg-gray-200 h-1 text-xl">
        <tr>
            <th class="border-2 border-black p-4">Priority</th>
            <th class="border-2 border-black p-4">Title</th>
            <th class="border-2 border-black p-4">Description</th>
            <th class="border-2 border-black p-4">Due Date</th>
            <th class="border-2 border-black p-4">Status</th>
            <th class="border-2 border-black p-4">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(task, index) in tasks" :key="index" >
            <td class="border-b-2 border-black p-4 text-red-600 font-semibold border-2"><div class="border-2 border-red-600 rounded-lg">{{ task.priority }}</div></td>
            <td class="border-b-2 border-black p-4">{{ task.title }}</td>
            <td class="border-b-2 border-black p-4">{{ task.description }}</td>
            <td class="border-b-2 border-black p-4">{{ task.dueDate }}</td>
            <td class="border-b-2 border-black p-4 ">
                <button class="btn btn-success"><img class="w-5 text-center" src="../assets/square-check-svgrepo-com.svg" /></button>
                <!-- <button><img class="w-8" src="../assets/square-svgrepo-com.svg" /></button> -->
            </td>
            <td class="border-b-2 border-r-2 border-black w-min text-center">
            <button class="btn btn-primary mr-4 text-base"><img class="w-5" :src="editIcon"/></button>
            <button class="btn btn-danger text-base"><img class="w-5" :src='deleteIcon'/></button>
            </td>
        </tr>
        </tbody>
    </table>
</template>