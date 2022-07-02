import { Status } from "../../shared/types/task.types";

export interface ITask {
	id: number;
	status: Status;
	text: string;
	createdAt: string;
	endDate: string;
}

export interface TaskState {
	list: ITask[];
}
