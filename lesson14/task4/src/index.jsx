import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import ConnectionStatus from './ConnectionStatus.jsx'

import './index.scss'

ReactDOM.render(
	<StrictMode>
		<ConnectionStatus />
	</StrictMode>,
	document.getElementById('root')
)
