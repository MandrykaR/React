import React, { useEffect, useState } from 'react'

const Clock = ({ offset, location }) => {
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date())
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	})

	const calculateLocalTime = () => {
		const localTime = new Date(time.getTime() + offset * 3600 * 1000)
		return localTime.toLocaleTimeString()
	}

	return (
		<div className='clock'>
			<div className='clock__location'>{location}</div>
			<div className='clock__time'>{calculateLocalTime()}</div>
		</div>
	)
}

export default Clock
