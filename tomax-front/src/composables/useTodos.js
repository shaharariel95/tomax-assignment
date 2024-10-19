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