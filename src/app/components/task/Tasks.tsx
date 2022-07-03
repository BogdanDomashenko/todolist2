import { FC, SyntheticEvent, useState } from "react";
import TaskList from "./TaskList/TaskList";
import { useAppSelector } from "../../hooks/store.hook";
import { Status } from "../../shared/types/task.types";
import TaskForm from "./TaskForm/TaskForm";
import styles from "./Tasks.module.scss";
import { Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
	status: Status;
}

const Tasks: FC<Props> = ({ status }) => {
	const navigate = useNavigate();
	const formRequired = status === Status.processing;

	const { list } = useAppSelector((state) => state.tasks);
	const filteredList = list.filter(item => item.status === status);

	const [filter, setFilter] = useState<string>("todo");

	const handleChange = (event: SyntheticEvent, newValue: string) => {
		setFilter(newValue);
		navigate("/tasks/" + newValue);
	};

	return (
		<div className={styles.tasks}>
			<Tabs value={filter} onChange={handleChange} aria-label="basic tabs example">
				<Tab value="todo" label="Todo" />
				<Tab value="completed" label="Completed" />
			</Tabs>
			{formRequired && <TaskForm className={styles.form} newItemId={list.length + 1} />}
			{list ? <TaskList items={filteredList} /> : ""}
		</div>
	);
};

export default Tasks;
