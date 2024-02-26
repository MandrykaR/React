import React from 'react'

const Greeting = props => {
	const calculateAge = birthDate => {
		const today = new Date()
		const diff = today - birthDate
		let age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
		const birthDateThisYear = new Date(
			today.getFullYear(),
			props.birthDate.getMonth(),
			props.birthDate.getDate()
		)
		if (today < birthDateThisYear) {
			age--
		}
		return age
	}

	const birthDate = calculateAge(props.birthDate)

	return (
		<div className='greeting'>
			My name is {props.firstName} {props.lastName}. I am {birthDate} years old
		</div>
	)
}

export default Greeting
