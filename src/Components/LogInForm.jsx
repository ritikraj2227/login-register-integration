import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LogInForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		sessionStorage.clear();
	}, []);

	const proceedLogin = async (e) => {
		e.preventDefault();
		if (validate()) {
			await axios
				.get(`http://localhost:5000/userDetails/${username}`)
				.then((res) => {
					return res;
				})
				.then((res) => {
					if (res.data.Password === password) {
						sessionStorage.setItem("username", username);
						return navigate("/");
					} else {
						alert("please enter valid password");
						return false;
					}
				})
				.catch((err) => {
					alert(`Please enter a valid Username`);
					console.log(err.message);
					return false;
				});
		}
	};

	const validate = () => {
		let result = true;
		if (username === "" || username === null) {
			alert("Please Enter Username and Password");
			return (result = false);
		}
		if (password === "" || password === null) {
			alert("Please Enter Your Password");
			return (result = false);
		}

		return result;
	};
	return (
		<div className="container">
			<form
				className="container"
				onSubmit={proceedLogin}>
				<div className="flexcontainer">
					{/* card */}
					<div className="card">
						{/* card-header */}
						<div className="card-header">
							<h1>User LogIN</h1>
						</div>
						<div className="card-body">
							{/* username */}
							<div className="row">
								<label htmlFor="username">
									UserName
									<span className="errmsg">*</span>
								</label>
								<input
									type="text"
									id="username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
							{/* password and confirm password*/}
							<div className="py-2 row">
								<label htmlFor="password">
									Password
									<span className="errmsg">*</span>
								</label>
								<input
									type="password"
									id="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
						</div>
						{/* card footer */}
						<div className="card-footer">
							<button type="submit">Register</button>
							<p>
								Don't Have a Account <Link to="/register">Register</Link>
							</p>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default LogInForm;
