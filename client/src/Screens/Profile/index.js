import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPostbyUser } from '../../Services/Post';
import { getUserInfo, updateUserInfo } from '../../Services/User';
import "./Profile.scss";

const ProfileScreen = () => {
	const [update, setUpdate] = useState(false);
	const { id } = useParams();
	const [userInfo, setUserInfo] = useState({});
	const { profilePhoto, username, email, firstName, lastName } = userInfo;

	const handleOnChangeProfile = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setUserInfo({ ...userInfo, [name]: value });
	}

	const handleUpdateProfile = async () => {
		if (update) {
			try {
				await updateUserInfo(id, userInfo);
			} catch (err) { }
		}
		setUpdate(!update)
	}

	useEffect(() => {
		const fetchUserInfoById = async () => {
			try {
				const data = await getUserInfo(id);
				setUserInfo(data);
			} catch (error) { }
		}

		fetchUserInfoById();
	}, [id]);

	const [postsData, setPostsData] = useState()
	useEffect(() => {
		const fetchData = async () => {
			const data = await getPostbyUser(id)
			setPostsData(data.reverse())
		}
		fetchData()
	}, [id])

	return (
		<div className='ProfileScreen'>
			<div className="left-profile">
				<div className="profile-image">
					<img src={profilePhoto} alt="profile" />
				</div>
				<div className="profile-info">
					<div className="profile-name">
						<h1>{username}</h1>
					</div>
					<div className="profile-bio">
						<div className="line">
							<label htmlFor="first-name">First Name:</label>
							<input
								type="text"
								className={update && "update"}
								name="firstName"
								disabled={!update}
								value={firstName}
								onChange={handleOnChangeProfile}
							/>
						</div>

						<div className="line">
							<label htmlFor="last-name">Last Name:</label>
							<input
								type="text"
								className={update && "update"}
								name="lastName"
								disabled={!update}
								value={lastName}
								onChange={handleOnChangeProfile}
							/>
						</div>

						<div className="line">
							<label htmlFor="email">Email:</label>
							<input
								type="text"
								name="email"
								value={email}
								onChange={handleOnChangeProfile}
							/>
						</div>

						<button onClick={handleUpdateProfile}>
							{update ? "Save" : "Update"} Profile
						</button>
					</div>
				</div>
			</div>

			<div className="right-profile">
				{postsData?.length > 0 ? <>
					<h1>Recently Posts</h1>
					{
						postsData.map(({ title, id }) => (
							<div key={id} style={{display: 'flex'}}>
								<Link to={`/posts/${id}`} className="post" style={{ textDecoration: 'none', flex: 1 }}>{title}</Link>
							</div>
						))
					}

				</> : <h1>No Posts</h1>}
			</div>
		</div>
	);
}

export default ProfileScreen;
