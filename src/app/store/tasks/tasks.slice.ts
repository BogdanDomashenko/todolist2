import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../../shared/types/task.types";
import { ITask, TaskState } from "./tasks.interface";

const date = JSON.stringify(new Date());

const initialState: TaskState = {
	list: [
		{
			id: 1,
			status: Status.processing,
			text: "test",
			createdAt: date,
			endDate: date,
		},
		{
			id: 2,
			status: Status.processed,
			text: "test",
			createdAt: date,
			endDate: date,
		},
		{
			id: 3,
			status: Status.canceled,
			text: "test",
			createdAt: date,
			endDate: date,
		},
	],
};

export const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<ITask>) => {
			state.list.push(action.payload);
		},
		setTaskStatus: (state, action: PayloadAction<{ id: number, status: Status }>) => ({
			...state,
			list: state.list.map(item => item.id === action.payload.id ? {
				...item,
				status: action.payload.status,
			} : item),

		}),
	},
});

export const { addTask, setTaskStatus } = tasksSlice.actions;
export default tasksSlice.reducer;
