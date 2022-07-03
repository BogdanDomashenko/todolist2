import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const Home = () => {
	return (
		<div>
			<Container>
				<Outlet />
			</Container>
		</div>
	);
};

export default Home;
