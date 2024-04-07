import React from 'react'

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props)
	}

	handleChange = e => {
		this.props.onTemperatureChange(e.target.value)
	}

	render() {
		const temperature = this.props.temperature
		const scale = this.props.scale
		return (
			<fieldset>
				<legend>Enter temperature in {scale}:</legend>
				<input value={temperature} onChange={this.handleChange} />
			</fieldset>
		)
	}
}

export default TemperatureInput
