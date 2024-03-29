import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
    },
    
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;    
        },
        toggleTaskDone: ({ tasks }, { payload: taskID }) => {
            const index = tasks.findIndex( task => task.id === taskID );
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskID }) => {
            const index = tasks.findIndex( task => task.id === taskID );
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            tasks.forEach((task) => task.done = true);
        },
        fetchExampleTasks: (state) => { 
            state.loading = true;
        },
        fetchExampleTasksSuccess: (state, { payload: tasks }) => { 
            state.tasks = tasks;
            state.loading = false;
        },
        fetchExampleTasksError: (state) => { 
            state.loading = false;
        }, 
    },    
});

export const {     
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    fetchExampleTasksError,
    fetchExampleTasksSuccess,
    setTasks,
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;
             
export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTaskEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);
    
    if (!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) => 
        content.toUpperCase().includes(query.trim().toUpperCase()));
}

export const selectIsLoading = (state) => selectTasksState(state).loading === true;
    
export default tasksSlice.reducer;


