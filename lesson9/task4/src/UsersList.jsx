import React from 'react'
import User from './User.jsx'
import Filter from './Filter.jsx'

class UsersList extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			filter: '',
		}
	}

	handleFilterChange = e => {
		this.setState({
			filter: e.target.value,
		})
	}

	render() {
		const { filter } = this.state
		const { users } = this.props

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
