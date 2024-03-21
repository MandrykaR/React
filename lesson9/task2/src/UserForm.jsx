import React from 'react'

class UserForm extends React.Component {
	state = {
		name: '',
		student: '',
		occupation: '',
		about: '',
	}

	handleChange = e => {
		const { name, value, checked, type } = e.target

		const val = type === 'checkbox' ? checked : value

		this.setState({
			[name]: val,
		})
	}

	handleSubmit = e => {
		const { onSubmit } = this.props
		e.preventDefault()

		onSubmit(this.state)
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className='login-form'>
				<h1 className='form-title'>Profile</h1>

				<div className='form-control'>
					<label className='form-label' htmlFor='name'>
						Name
					</label>
					<input
						className='form-input'
						type='text'
						id='name'
						name='name'
						value={this.state.name}
						onChange={this.handleChange}
					/>
				</div>

				<div className='form-control'>
					<label className='form-label' htmlFor='student'>
						Student
					</label>
					<input
						className='form-input'
						type='checkbox'
						id='student'
						name='student'
						value={this.state.student}
						onChange={this.handleChange}
					/>
				</div>

				<div className='form-control'>
					<label className='form-label' id='occupation' htmlFor='occupation'>
						Occupation
					</label>
					<select
						value={this.state.occupation}
						name='occupation'
						className='form-input'
						onChange={this.handleChange}
					>
						<option value='london'>London</option>
						<option value='new-york'>New York</option>
						<option value='coconut'>Sidney</option>
						<option value='mango'>Berlin</option>
					</select>
				</div>

				<div className='form-control'>
					<label className='form-label' occupation id='about' htmlFor='about'>
						About
					</label>
					<textarea
						value={this.state.about}
						name='about'
						className='form-input'
						onChange={this.handleChange}
					/>
				</div>

				<button className='submit-button' type='submit'>
					Submit
				</button>
			</form>
		)
	}
}

export default UserForm
