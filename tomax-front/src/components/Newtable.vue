<script setup>
import editIcon from '../assets/edit-svgrepo-com.svg';
import deleteIcon from '../assets/delete-svgrepo-com.svg';
import highPriorityIcon from '../assets/high-priority.svg';
import mediumPriorityIcon from '../assets/medium-priority.svg';
import lowPriorityIcon from '../assets/low-priority.svg';


const tasks = [
    { priority: 'High', title: 'build the backend for the Tomax assignment', description: 'Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk' , dueDate: '2024-10-20', completed: false },
    { priority: 'Medium', title: 'Task 2', description: 'Team meeting a;fjvalerjvb slfjba;lfja;lkjfd a;jdfba;jrf s', dueDate: '2024-10-21', completed: true },
    { priority: 'Medium', title: 'Task 2', description: 'Team meeting a;fjvalerjvb slfjba;lfja;lkjfd a;jdfba;jrf s', dueDate: '2024-10-21', completed: true },
    { priority: 'Low', title: 'Task 2', description: 'Team meeting a;fjvalerjvb slfjba;lfja;lkjfd a;jdfba;jrf s', dueDate: '2024-10-21', completed: true },
    { priority: 'High', title: 'Task 2', description: 'Team meeting a;fjvalerjvb slfjba;lfja;lkjfd a;jdfba;jrf s', dueDate: '2024-10-21', completed: true },
    { priority: 'Medium', title: 'Task 2', description: 'Team meeting a;fjvalerjvb slfjba;lfja;lkjfd a;jdfba;jrf s', dueDate: '2024-10-21', completed: true },
    { priority: 'Medium', title: 'Task 2', description: 'Team meeting a;fjvalerjvb slfjba;lfja;lkjfd a;jdfba;jrf s', dueDate: '2024-10-21', completed: true },
    { priority: 'Medium', title: 'Task 2', description: 'Team meeting a;fjvalerjvb slfjba;lfja;lkjfd a;jdfba;jrf s', dueDate: '2024-10-21', completed: true },
    { priority: 'Low', title: 'Task 2', description: 'Team meeting a;fjvalerjvb slfjba;lfja;lkjfd a;jdfba;jrf s', dueDate: '2024-10-21', completed: true },
    { priority: 'High', title: 'Task 2', description: 'Team meeting a;fjvalerjvb slfjba;lfja;lkjfd a;jdfba;jrf s', dueDate: '2024-10-21', completed: true },


  // Add more tasks as needed
];
</script>

<template>
    <table class="w-full border-collapse text-lg rounded-sm table-auto" >
        <thead class="bg-gray-200 h-1 text-xl">
            <tr>
                <th class="border-2 border-black p-4 w-[5%] ">Priority</th>
                <th class="border-2 border-black p-4 w-[25%]">Title</th>
                <th class="border-2 border-black p-4 w-[45%]">Description</th>
                <th class="border-2 border-black p-4 w-[10%]">Due Date</th>
                <th class="border-2 border-black p-4 w-[5%]">Status</th>
                <th class="border-2 border-black p-4 w-[10%]">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr class="" v-for="(task, index) in tasks" :key="index" >
                <td class="border-b-2 border-black p-4 text-red-600 font-semibold border-l-2" >
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
            <td class="border-b-2 border-black p-4 font-semibold text-start">{{ task.description }}</td>
            <td class="border-b-2 border-black p-4">{{ task.dueDate }}</td>
            <td class="border-b-2 border-black p-4 ">
                <button class="btn btn-success"><img class="w-5 text-center" src="../assets/square-check-svgrepo-com.svg" /></button>
                <!-- <button><img class="w-8" src="../assets/square-svgrepo-com.svg" /></button> -->
            </td>
            <td class="border-b-2 border-r-2 border-black w-min text-center">
            <button class="btn btn-primary mr-3 text-base"><img class="w-5" :src="editIcon"/></button>
            <button class="btn btn-danger text-base"><img class="w-5" :src='deleteIcon'/></button>
            </td>
        </tr>
        </tbody>
    </table>
</template>