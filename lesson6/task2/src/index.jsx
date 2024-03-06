import React from 'react'
import ReactDOM from 'react-dom'
import Mailbox from './Mailbox.jsx'

import './index.scss'

ReactDOM.render(<Mailbox unreadMessages={['a']}/>, document.getElementById('root'))
