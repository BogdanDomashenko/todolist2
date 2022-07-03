import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import styles from "./TaskForm.module.scss";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ruLocale from "date-fns/locale/ru";
import { useAppDispatch } from "../../../hooks/store.hook";
import { addTask } from "../../../store/tasks/tasks.slice";
import { Status } from "../../../shared/types/task.types";

interface Props {
	className: string;
	newItemId: number;
}

const TaskForm: FC<Props> = ({ className, newItemId }) => {
	const dispatch = useAppDispatch();
	const currentDate = new Date();
	const [endDate, setEndDate] = useState<Date | null>(new Date(currentDate.getTime() + (24 * 60 * 60 * 1000)));

	const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm({
		defaultValues: {
			text: "",
			endDate,
		},
	});

	useEffect(() => {
		register("endDate");
	}, []);

	const handleDateChange = (value: Date | null) => {
		setEndDate(value);
		setValue("endDate", value, { shouldValidate: true, shouldDirty: true });
	};

	const onSubmit = (data: any) => {
		dispatch(addTask({
			id: newItemId,
			status: Status.processing,
			text: data.text,
			createdAt: JSON.stringify(currentDate),
			endDate: JSON.stringify(data.endDate),
		}));
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.taskForm + " " + className}>
			<div className={styles.item + " " + styles.textField}>
				<TextField label="text" variant="outlined" {...register("text")} multiline rows={3} className={styles.text} />
			</div>
			<div className={styles.item}>
				<LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ruLocale}>
					<DateTimePicker
						label="Date&Time picker"
						value={endDate}
						onChange={handleDateChange}
						renderInput={(params) => <TextField {...params} />}
					/>
				</LocalizationProvider>
			</div>
			<div className={styles.item}>
				<Button type="submit" variant="outlined" className={styles.submitButton}>Add</Button>
			</div>
			{/*{errors.exampleRequired && <span>This field is required</span>}*/}
		</form>
	);
};

export default TaskForm;
