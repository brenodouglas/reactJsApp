import React from 'react';

class Repos extends React.Component {

	render() {
		
		let repos = this.props.repos.map((repo, key) => {
			return (
				<li className="list-group-item" key={key} >
					{repo.html_url && <h4> <a href={repo.html_url} > {repo.name} </a> </h4> }
					{repo.description && <p> {repo.description} </p> }
				</li>
			)
		});

		return (
			<div>
				<h3> User repos </h3>
				
				<ul className="list-group">
					{repos}
				</ul>
				
			</div>
		)
	}

}

Repos.propTypes = {
	username: React.PropTypes.string.isRequired,
	repos: React.PropTypes.array.isRequired
};

export default Repos;