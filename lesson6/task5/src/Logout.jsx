import React from 'react'

const Logout = ({onLogout}) => {
	return (
		<button onClick={onLogout}  className="login btn">Logout</button>
	)
}

export default Logout