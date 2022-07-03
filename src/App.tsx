import { Layout, Tasks } from "./app/components";
import { Home } from "./app/pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { Status } from "./app/shared/types/task.types";

function App() {
	return (
		<div className="App">
			<Layout>
				<Routes>
					<Route
						path="*"
						element={<Navigate to="/tasks/todo" replace />}
					/>
					<Route path="/tasks" element={<Home />}>
						<Route
							path=""
							element={<Navigate to="/tasks/todo" replace />}
						/>
						<Route path="todo" element={<Tasks status={Status.processing} />} />
						<Route path="completed" element={<Tasks status={Status.processed} />} />
					</Route>
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
