import React from 'react';

class NoteList extends React.Component {

	render() {
		let notes = this.props.notes.map(function(note, key) {
			return <li className="list-group-item" key={key}>{note}</li>
		});

		return (
			<ul className="list-group">
				{notes}
			</ul>	
		)
	}

}

export default NoteList;
