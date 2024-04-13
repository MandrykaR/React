import React from 'react'
import Dialog from './Dialog.jsx'

class App extends React.Component {
	state = {
		isOpen: false,
	}

	hideDialog = () => {
		this.setState({
			isOpen: false,
		})
	}

	showDialog = () => {
		this.setState({
			isOpen: true,
		})
	}

	render() {
		return (
			<div className='app'>
				<button onClick={this.showDialog} className='btn'>
					Show dialog
				</button>
				<Dialog
					isOpen={this.state.isOpen}
					onClose={this.hideDialog}
					title='some text'
				>
					<p>Some text</p>
				</Dialog>
			</div>
		)
	}
}

export default App
