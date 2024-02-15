import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const elem = (
	<div>
		<h1>Search Form</h1>
		<div>
			<input type='text' />
			<button>Search</button>
		</div>
	</div>
)

root.render(elem)
