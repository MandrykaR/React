import React from 'react'
import { createRoot } from 'react-dom/client'

import './styles.css'

const rootElement = document.querySelector('#root')

const titleApp = <h1 className='title'>Todo List</h1>

const root = createRoot(rootElement)
root.render(titleApp)
	