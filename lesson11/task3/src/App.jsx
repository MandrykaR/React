import React from 'react'
import Expand from './Expand.jsx'

class App extends React.Component {
	state = {
		isOpen: false,
	}

	toggleExpand = () => {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen,
		}))
	}

	render() {
		return (
			<div className='app'>
				<Expand
					isOpen={this.state.isOpen}
					toggleExpand={this.toggleExpand}
					title='Some title'
				>
					<p>
						Hooks are a new addition in React 16.8. They let you use state and
						other React features without writing a class.
					</p>
				</Expand>
			</div>
		)
	}
}

export default App
