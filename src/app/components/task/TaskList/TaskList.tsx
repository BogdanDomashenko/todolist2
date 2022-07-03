import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.scss";
import { ITask } from "../../../store/tasks/tasks.interface";
import { FC } from "react";

interface Props {
	items: ITask[];
}

const TaskList: FC<Props> = ({ items }) => {
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
						{items.map((item) => (
							<TaskItem key={item.id.toString()} item={item} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default TaskList;
