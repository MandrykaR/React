import Comment from './Comment.jsx'

import React from 'react'

const userInfo = {
	name: 'Tom',
	avatarUrl:
		'https://avatars.githubusercontent.com/u/105412372?s=400&u=4cb26424388c0fb490a97a8d3aa1f1dc8a31d668&v=4',
}

const App = () => {
	return <Comment author={userInfo} text='Good job!' date={new Date()} />
}

export default App
