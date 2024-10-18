import { ref, onMounted } from 'vue';

const API_BASE_URL = 'http://localhost:5001';

export function useTodos() {
    const todos = ref([]);
    const error = ref(null);

    const fetchTodos = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/todos`);
            if (!response.ok) {
                throw new Error('Failed to fetch todos');
            }
            todos.value = await response.json();

            // todos.value = [
                // { priority: 'High', title: 'build the backend for the Tomax assignment', description: 'Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv', dueDate: '2024-10-20', completed: false },
                // { priority: 'Medium', title: 'Task 2', description: 'Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv', dueDate: '2024-10-21', completed: true },
                // { priority: 'Medium', title: 'Task 3', description: 'Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv', dueDate: '2024-10-22', completed: true },
                // { priority: 'Low', title: 'Task 4', description: 'Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv', dueDate: '2024-10-23', completed: true },
                // { priority: 'High', title: 'Task 5', description: 'Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv', dueDate: '2024-10-24', completed: true },
                // { priority: 'Medium', title: 'Task 6', description: 'Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv', dueDate: '2024-10-25', completed: false },
                // { priority: 'Medium', title: 'Task 7', description: 'Team meeting a;fjvalerjvb slf Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvjba;lfja;lkjfd a;jdfba;jrf s', dueDate: '2024-10-26', completed: true },
                // { priority: 'Medium', title: 'Task 8', description: 'Te Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvam meeting a;fjvalerjvb slfjba;lfja;lkjfd a;jdfba;jrf s', dueDate: '2024-10-27', completed: false },
                // { priority: 'Low', title: 'Task 9', description: 'Team meeting a;fjvalerjvb slfjba;lfja;lkjfd a;jdFinish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvfba;jrf s', dueDate: '2024-10-28', completed: true },
                // { priority: 'High', title: 'Task 10', description: 'Team meeting a;fjvalerjvb sFinish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdv Finish report aljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvbalirgfal valireugfl zKJ DvlIRgLIRGFlk ljialkjdvlfjba;lfja;lkjfd a;jdfba;jrf s', dueDate: '2024-10-29', completed: false },
            // ]
        } catch (err) {
            error.value = err.message;
            console.error(err);
        }
    };

    const addTodo = async (newTodo) => {
        try {
            const response = await fetch(`${API_BASE_URL}/todos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTodo),
            });
            if (!response.ok) {
                throw new Error('Failed to add todo');
            }
            const addedTodo = await response.json();
            // console.log(`added todo:`)
            // console.log(addedTodo)
            todos.value.push(newTodo);
        } catch (err) {
            error.value = err.message;
            console.error(err);
        }
    };

    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete todo');
            }
            todos.value = todos.value.filter(todo => todo.id !== id);
        } catch (err) {
            error.value = err.message;
            console.error(err);
        }
    };

    const editTodo = async (id, updatedTodo) => {
        try {
            const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTodo),
            });
            if (!response.ok) {
                throw new Error('Failed to update todo');
            }
            console.log("response from editTodo")
            console.log(response)
            const updated = await response.json();
            const index = todos.value.findIndex(todo => todo.id === id);
            if (index !== -1) {
                todos.value[index] = updated;
            }
        } catch (err) {
            error.value = err.message;
            console.error(err);
        }
    };

    const markComplete = async (id) => {
        const todo = todos.value.find(t => t.id === id);
        console.log(`found todo with id: ${todo.id} and title ${todo.title}`)
        if (todo) {
            await editTodo(id, { ...todo, completed: !todo.completed });
        }
    };

    onMounted(fetchTodos);

    return {
        todos,
        error,
        addTodo,
        deleteTodo,
        editTodo,
        markComplete
    };
}