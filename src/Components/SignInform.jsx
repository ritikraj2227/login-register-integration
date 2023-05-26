import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignInform = () => {
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [dob, setDob] = useState("");
	const [gender, setGender] = useState("male");
	const [username, setUsername] = useState("");
	const [pass, setPass] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		let registerdata = {
			FirstName: fname,
			LastName: lname,
			Email: email,
			Number: number,
			Dob: dob,
			Gender: gender,
			id: username,
			Password: pass,
		};

		await axios.post("http://localhost:5000/userDetails", registerdata)
		.catch((err) => {
			console.log(err.message);
		});

		return navigate("/login");
	};
	return (
		<div className="container">
			<form
				className="container"
				onSubmit={handleSubmit}>
				<div className="flexcontainer">
					{/* card */}
					<div className="card">
						{/* card-header */}
						<div className="card-header">
							<h1>User Registration</h1>
						</div>
						<div className="card-body">
							{/* first name and last name */}
							<div className="row flname">
								<div className="col">
									<label htmlFor="firstname">
										First name
										<span className="errmsg">*</span>
									</label>
									<input
										type="text"
										id="firstname"
										value={fname}
										onChange={(e) => setFname(e.target.value)}
										required
									/>
								</div>
								<div className="col">
									<label htmlFor="lastname">
										Last name
										<span className="errmsg">*</span>
									</label>
									<input
										type="text"
										id="lastname"
										value={lname}
										onChange={(e) => setLname(e.target.value)}
										required
									/>
								</div>
							</div>
							{/* email and phoneNumber */}
							<div className="row flname">
								<div className="col">
									<label htmlFor="InputEmail">
										Email address
										<span className="errmsg">*</span>
									</label>
									<input
										type="email"
										id="InputEmail"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className="col">
									<label htmlFor="Number">
										Phone Number
										<span className="errmsg">*</span>
									</label>
									<input
										type="number"
										id="number"
										value={number}
										onChange={(e) => setNumber(e.target.value)}
										required
									/>
								</div>
							</div>
							{/* date of birth */}
							<div className="row dob">
								<label htmlFor="dob">
									Date of Birth:
									<span className="errmsg">*</span>
								</label>
								<input
									type="date"
									id="dob"
									name="dob"
									value={dob}
									onChange={(e) => setDob(e.target.value)}
									required
								/>
							</div>
							{/* gender */}
							<div className="row gender ">
								<label
									htmlFor="gender"
									className="form-label">
									Gender:
									<span className="errmsg">*</span>
								</label>
								<div style={{ display: "flex" }}>
									<div className="radio">
										<input
											type="radio"
											name="gender"
											id="female"
											value="female"
											checked={gender === "female"}
											onChange={(e) => setGender(e.target.value)}
											required
										/>
										<label htmlFor="female">Female</label>
									</div>
									<div className="radio">
										<input
											type="radio"
											name="gender"
											id="male"
											value="male"
											checked={gender === "male"}
											onChange={(e) => setGender(e.target.value)}
											required
										/>
										<label htmlFor="male">Male</label>
									</div>
									<div className="radio">
										<input
											type="radio"
											name="gender"
											id="other"
											value="other"
											checked={gender === "other"}
											onChange={(e) => setGender(e.target.value)}
											required
										/>
										<label htmlFor="other">Other</label>
									</div>
								</div>
							</div>
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
									required
								/>
							</div>
							{/* password and confirm password*/}
							<div className="row">
								<label htmlFor="password">
									Password
									<span className="errmsg">*</span>
								</label>
								<input
									type="password"
									id="password"
									value={pass}
									onChange={(e) => setPass(e.target.value)}
									required
								/>
							</div>
						</div>
						{/* card footer */}
						<div className="card-footer ">
							<button type="submit">Register</button>
							<p>
								Already Have a Account <Link to="/login">Login</Link>
							</p>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SignInform;
