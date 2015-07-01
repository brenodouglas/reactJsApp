import React from 'react';

class UserProfile extends React.Component {

	render() {
		let bio = this.props.bio;

		return (
			<div>
				<h3> User Profile </h3>
				
				<ul className="list-group">
					{bio.avatar_url && <li className="list-group-item"> <img src={bio.avatar_url} className="img-responsive" /></li>}
					{bio.name && <li className="list-group-item"> Name: {bio.name} </li>}
					{bio.login && <li className="list-group-item"> Login: {bio.login} </li>}
					{bio.email && <li className="list-group-item"> Email: {bio.email} </li>}
					{bio.location && <li className="list-group-item"> Location: {bio.location} </li>}
					{bio.followers && <li className="list-group-item"> Followers: {bio.followers} </li>}
					{bio.following && <li className="list-group-item"> Following: {bio.following} </li>}
				</ul>
			</div>
		)
	}

}

UserProfile.propTypes = {
	username: React.PropTypes.string.isRequired,
	bio: React.PropTypes.object.isRequired
};

export default UserProfile;

