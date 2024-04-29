import React, { useEffect, useState } from 'react'

const ConnectionStatus = () => {
	const [isOnline, setIsOnline] = useState(true)

	useEffect(() => {
		const offlineToggle = () => setIsOnline(false)
		const onlineToggle = () => setIsOnline(true)

		window.addEventListener('online', onlineToggle)
		window.addEventListener('offline', offlineToggle)

		return () => {
			window.removeEventListener('online', onlineToggle)
			window.removeEventListener('offline', onlineToggle)
		}
	}, [])

	return (
		<div className={`status ${!isOnline && 'status_offline'}`}>
			{isOnline ? 'online' : 'offline'}
		</div>
	)
}

export default ConnectionStatus
