import React, { FC } from "react";
import { Button, Checkbox, TableCell, TableRow } from "@mui/material";
import { ITask } from "../../store/tasks/tasks.interface";
import { useLocale } from "../../hooks";
import { Status } from "../../shared/types/task.types";
import { useAppDispatch } from "../../hooks/store.hook";
import { setTaskStatus } from "../../store/tasks/tasks.slice";

interface Props {
	item: ITask;
}

const TaskItem: FC<Props> = ({ item }) => {
	const dispatch = useAppDispatch();
	const locale = useLocale();

	const checked = item.status === Status.processed;
	const createdAt = new Date(JSON.parse(item.createdAt));
	const endDate = new Date(JSON.parse(item.createdAt));

	const handleStatusChange = (value: any) => {
		if (checked) {
			dispatch(setTaskStatus({ id: item.id, status: Status.processing }));
		} else {
			dispatch(setTaskStatus({ id: item.id, status: Status.processed }));
		}
	};

	return (
		<TableRow
			sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
		>
			<TableCell component="th" scope="row">
				<Checkbox checked={checked} onChange={handleStatusChange} />
			</TableCell>
			<TableCell align="right">{item.text}</TableCell>
			<TableCell align="right">{createdAt.toLocaleString(locale)}</TableCell>
			<TableCell align="right">{endDate.toLocaleString(locale)}</TableCell>
			<TableCell>
				<Button variant="outlined" color="error" size="small">
					Delete
				</Button>
			</TableCell>
		</TableRow>
	);
};

export default TaskItem;
