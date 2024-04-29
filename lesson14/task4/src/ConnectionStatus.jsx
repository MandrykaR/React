import React, { useEffect, useState } from 'react'

const ConnectionStatus = () => {
	const [isOnline, setIsOnline] = useState(navigator.onLine)

	useEffect(() => {
		const handleOnline = () => {
			setIsOnline(navigator.onLine)
		}

		window.addEventListener('online', handleOnline)
		window.addEventListener('offline', handleOnline)

		return () => {
			window.removeEventListener('online', handleOnline)
			window.removeEventListener('offline', handleOnline)
		}
	}, [])

	return (
		<div>
			{isOnline ? (
				<div class='status'>Online</div>
			) : (
				<div class='status status_offline'>Offline</div>
			)}
		</div>
	)
}

export default ConnectionStatus
