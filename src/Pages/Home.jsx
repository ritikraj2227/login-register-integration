import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
	const [user, setUser] = useState({});
	const username = sessionStorage.getItem("username");

	

	useEffect(() => {
		axios.get(`http://localhost:5000/userDetails/${username}`).then((res) => {
			return setUser(res.data);
		});

		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<nav>
				<h2>
					Welcome: {user.FirstName}&nbsp;
					{user.LastName}
				</h2>
				<button>
					<Link to="/login">LogOut</Link>
				</button>
			</nav>

			<main className="tablecontainer">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Field</th>
							<th scope="col">Data</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Name</td>
							<td>
								{user.FirstName}&nbsp;
								{user.LastName}
							</td>
						</tr>
						<tr>
							<td>Email</td>
							<td>{user.Email}</td>
						</tr>
						<tr>
							<td>Number</td>
							<td>{user.Number}</td>
						</tr>
						<tr>
							<td>Dob</td>
							<td>{user.Dob}</td>
						</tr>
						<tr>
							<td>Gender</td>
							<td>{user.Gender}</td>
						</tr>
						<tr>
							<td>UserName</td>
							<td>{user.id}</td>
						</tr>

						<tr>
							<td>Password</td>
							<td>{user.Password}</td>
						</tr>
					</tbody>
				</table>
			</main>
		</div>
	);
};

export default Home;
