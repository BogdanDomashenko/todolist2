import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/store.hook";
import { useForm } from "react-hook-form";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm/TaskForm";
import styles from "./TaskList.module.scss";

const TaskList = () => {
	const dispatch = useAppDispatch();

	const { register, handleSubmit, formState: { errors } } = useForm();
	const { list } = useAppSelector((state) => state.tasks);

	return (
		<div className={styles.taskList}>
			<TableContainer className={styles.item}>
				<Table className={styles.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell width="10%">Status</TableCell>
							<TableCell width="50%" align="right">Text</TableCell>
							<TableCell width="15%" align="right">Created at</TableCell>
							<TableCell width="15%" align="right">End date</TableCell>
							<TableCell width="10%" align="right"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{list.map((item) => (
							<TaskItem key={item.id.toString()} item={item} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<TaskForm className={styles.item} newItemId={list.length + 1} />
		</div>
	);
};

export default TaskList;
