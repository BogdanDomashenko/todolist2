import { Container } from "@mui/material";
import TaskList from "../components/task/TaskList";

const Home = () => {
	return (
		<div>
			<Container>
				<TaskList />
			</Container>
		</div>
	);
};

export default Home;
