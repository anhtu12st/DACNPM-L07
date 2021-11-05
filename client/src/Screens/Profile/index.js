import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Profile.scss";

const ProfileScreen = () => {
	const [profile, setProfile] = useState({ userName:"Meo Meo", firstName: "Phan", lastName: "Anh Tu", email: "superhero@sentai.hensin", isUpdate: false });
	const { id } = useParams();

	const handleOnChangeProfile = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setProfile({ ...profile, [name]: value });
	}

	useEffect((id) => {
		console.log(id);
	}, [id]);

	return (
		<div className='ProfileScreen'>
			<div className="left-profile">
				<div className="profile-image">
					<img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="profile" />
				</div>
				<div className="profile-info">
					<div className="profile-name">
						<h1>{profile.userName}</h1>
					</div>
					<div className="profile-bio">
						<div className="line">
							<label htmlFor="first-name">First Name:</label>
							<input
								type="text"
								className={profile.isUpdate && "update"}
								name="firstName"
								disabled={!profile.isUpdate}
								value={profile.firstName}
								onChange={handleOnChangeProfile}
							/>
						</div>

						<div className="line">
							<label htmlFor="last-name">Last Name:</label>
							<input
								type="text"
								className={profile.isUpdate && "update"}
								name="lastName"
								disabled={!profile.isUpdate}
								value={profile.lastName}
								onChange={handleOnChangeProfile}
							/>
						</div>

						<div className="line">
							<label htmlFor="email">Email:</label>
							<input
								type="text"
								className={profile.isUpdate && "update"}
								name="email"
								disabled={!profile.isUpdate}
								value={profile.email}
								onChange={handleOnChangeProfile}
							/>
						</div>

						<button onClick={(e) => (setProfile({ ...profile, isUpdate: !profile.isUpdate }))}>
							{profile.isUpdate ? "Save" : "Update"} Profile
						</button>
					</div>
				</div>
			</div>

			<div className="right-profile">
				<h1>Recently Activity</h1>

				<div className="post">Your post: This the name of the post</div>
				<div className="post">Your post: This the name of the post</div>
				<div className="post">Your post: This the name of the post</div>
				<div className="post">Your post: This the name of the post</div>
				<div className="post">Your post: This the name of the post</div>
			</div>
		</div>
	);
}

export default ProfileScreen;
