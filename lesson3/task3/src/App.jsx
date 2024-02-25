import React from 'react'
import Comment from './Comment.jsx'

const user = {
	name: 'Tom',
	avatarUrl:
		'https://avatars.githubusercontent.com/u/105412372?s=400&u=4cb26424388c0fb490a97a8d3aa1f1dc8a31d668&v=4',
}

function App() {
	return <Comment user={user} text='Good job!' date={new Date()} />
}

export default App
