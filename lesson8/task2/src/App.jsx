import React from 'react'
import Clock from './Clock.jsx'

class App extends React.Component {
	state = {
		visible: true,
	}

	toggle = () => {
		this.setState({
			visible: !this.state.visible,
		})
	}

	render() {
		return (
			<>
				{this.state.visible ? (
					<div className='clock-flex'>
						<Clock location='London' offset={0} />
						<Clock location='Kyiv' offset={2} />
						<Clock location='New York' offset={-5} />
					</div>
				) : null}
				<button className='btn' onClick={this.toggle}>
					{this.state.visible ? 'Hide' : 'Show'}
				</button>
			</>
		)
	}
}

export default App
