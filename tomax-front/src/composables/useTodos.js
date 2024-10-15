import { ref } from 'vue';

export function useTodos() {
    const todos = ref([
        {
            id: "1",
            title: "Create a Fastify backend",
            description: "Set up the basic Fastify backend with ESM",
            priority: "High",
            dueDate: "2024-10-20T12:00:00Z",
            completed: false
        },
        {
            id: "2",
            title: "Create a Vue Frontend",
            description: "Set up the basic Vue.js front end for the Todo list app",
            priority: "High",
            dueDate: "2024-10-20T12:00:00Z",
            completed: false
        }
    ]);

    const addTodo = (todo) => {
        todos.value.push({ ...todo, id: Date.now().toString() });
    };

    const deleteTodo = (id) => {
        todos.value = todos.value.filter(todo => todo.id !== id);
    };

    const editTodo = (updatedTodo) => {
        const index = todos.value.findIndex(todo => todo.id === updatedTodo.id);
        if (index !== -1) {
            todos.value[index] = updatedTodo;
        }
    };

    const markComplete = (id) => {
        const todo = todos.value.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    };

    return {
        todos,
        addTodo,
        deleteTodo,
        editTodo,
        markComplete
    };
}