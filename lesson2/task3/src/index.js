import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderSeconds = time => {
	const seconds = new Date(time).getSeconds()

	const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000'
	const textColor = seconds % 2 !== 0 ? '#fff' : '#000'

	const styles = {
		color: textColor,
		backgroundColor,
	}

	const elem = (
		<main className='seconds' styles={styles}>
			<div>Now is {seconds}</div>
		</main>
	)

	root.render(elem)
}

renderSeconds(new Date())
