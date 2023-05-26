import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const username = sessionStorage.getItem("username");

	return username ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
