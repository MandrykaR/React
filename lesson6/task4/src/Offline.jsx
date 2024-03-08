import React from 'react'

const Offline = ({ onReconnect }) => {
	return (
		<>
			<span className='status__text'>Offline</span>
			<button onClick={onReconnect} className='status__btn'>
				Reconnect
			</button>
		</>
	)
}

export default Offline
