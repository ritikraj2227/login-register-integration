import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignIn from "./Pages/SignIn";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
	return (
		<Routes>
			<Route element={<ProtectedRoute />}>
				<Route
					element={<Home />}
					path="/"
					exact></Route>
			</Route>
			<Route
				path="/login"
				element={<LogIn />}
			/>
			<Route
				path="/register"
				element={<SignIn />}
			/>
		</Routes>
	);
}

export default App;
