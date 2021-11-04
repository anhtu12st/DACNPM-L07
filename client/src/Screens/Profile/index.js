import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./Profile.scss";

const ProfileScreen = () => {
	let { id } = useParams();

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
						<h1>John Doe</h1>
					</div>
					<div className="profile-bio">
						<form>
							<div className="line">
								<label htmlFor="first-name">First Name:</label>
								<input type="text" name="first-name" disabled value="Phan" />
							</div>
							
							<div className="line">
								<label htmlFor="last-name">Last Name:</label>
								<input type="text" name="last-name" disabled value="Anh Tu" />
							</div>

							<div className="line">
								<label htmlFor="email">Email:</label>
								<input type="text" name="email" disabled value="superhero@sentai.hensin" />
							</div>

							<button>
								Update Profile
							</button>
						</form>
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
