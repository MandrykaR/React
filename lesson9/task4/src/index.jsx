import React from 'react'
import ReactDOM from 'react-dom'
import UsersList from './UsersList.jsx'

const users = [
	{ id: 1, name: 'John', age: 25 },
	{ id: 2, name: 'Alice', age: 30 },
	{ id: 3, name: 'Bob', age: 35 },
	{ id: 4, name: 'Charlie', age: 40 },
	{ id: 5, name: 'Diana', age: 45 },
]

import './index.scss'

ReactDOM.render(<UsersList users={users} />, document.getElementById('root'))
