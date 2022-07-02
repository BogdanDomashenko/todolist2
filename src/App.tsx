import { Layout } from "./app/components";
import { Home } from "./app/pages";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
