import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: "1",
        title: "Task 1",
        description: "Task 1 description",
        completed: false
    },{
        id: "2",
        title: "Task 2",
        description: "Task 2 description",
        completed: false
    }];

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
            //[...state, action.payload];
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload;
            const taskEdited = state.find(task => task.id === id);
            if(taskEdited) {
                taskEdited.title = title;
                taskEdited.description = description;
            };
        },
        deleteTask: (state, action) => {
            const taskDeleted = state.find(task => task.id === action.payload);
            if(taskDeleted) {
                state.splice(state.indexOf(taskDeleted), 1);
            };
        },
    }
});


export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;