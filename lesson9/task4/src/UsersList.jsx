import React from 'react'
import User from './User.jsx'
import Filter from './Filter.jsx'

class UsersList extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			filter: '',
			users: [
				{ id: 1, name: 'John', age: 25 },
				{ id: 2, name: 'Alice', age: 30 },
				{ id: 3, name: 'Bob', age: 35 },
				{ id: 4, name: 'Charlie', age: 40 },
				{ id: 5, name: 'Diana', age: 45 },
			],
		}
	}

	handleFilterChange = e => {
		this.setState({
			filter: e.target.value,
		})
	}

	render() {
		const { filter, users } = this.state

		const filteredUsers = users.filter(user =>
			user.name.toLowerCase().includes(filter.toLowerCase())
		)

		return (
			<div>
				<Filter
					filterText={filter}
					count={filteredUsers.length}
					onChange={this.handleFilterChange}
				/>
				<ul className='users'>
					{filteredUsers.map(user => (
						<User key={user.id} name={user.name} age={user.age} />
					))}
				</ul>
			</div>
		)
	}
}

export default UsersList
