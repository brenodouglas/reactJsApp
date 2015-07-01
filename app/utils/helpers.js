import axios from 'axios';

class Helpers {
	
	getRepos(username) {
		return axios.get(`https://api.github.com/users/${username}/repos`);
	}

	getUserInfo(username) {
		return axios.get(`http://api.github.com/users/${username}`);
	}

	static getGithubInfo(username) {
		let instance = new Helpers();
		
		return axios.all([instance.getRepos(username), instance.getUserInfo(username)])
		.then( (arr) => {
			return {
				repos: arr[0].data,
				bio: arr[1].data
			};
		});
	}
}

export default Helpers;