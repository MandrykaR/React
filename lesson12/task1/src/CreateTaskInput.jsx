import React from 'react'

class CreateTaskInput extends React.Component {
	state = {
		value: '',
	}

	handleChange = e => {
		this.setState({
			value: e.target.value,
		})
	}

	handleTaskCreate = () => {
		this.props.onCreate(this.state.value)
		this.setState({ value: '' })
	}

	render() {
		return (
			<div className='create-task'>
				<input
					className='create-task__input'
					value={this.state.value}
					onChange={this.handleChange}
					type='text'
				/>
				<button
					className='btn create-task__btn'
					onClick={this.handleTaskCreate}
				>
					Create
				</button>
			</div>
		)
	}
}

export default CreateTaskInput
