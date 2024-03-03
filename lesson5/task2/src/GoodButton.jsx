import React from 'react'

class GoodButton extends React.Component {
	constructor(props) {
		super(props)
	}

	handleClick(e) {
		alert(e.target.textContent)
	}

	render() {
		return <button class="fancy-button" onClick={this.handleClick}>Click me!</button>
	}
}



export default GoodButton
