import React from 'react'

class UserForm extends React.Component {
	handleSubmit = e => {
		e.preventDefault()

		const formData = [...new FormData(this.formRef)].reduce(
			(acc, [name, value]) => ({ ...acc, [name]: value }),
			{}
		)

		console.log(formData)
	}

	setRef = node => {
		this.formRef = node
	}

	render() {
		return (
			<form
				ref={this.setRef}
				onSubmit={this.handleSubmit}
				className='login-form'
			>
				<h1 className='form-title'>Profile</h1>

				<div className='form-control'>
					<label className='form-label' htmlFor='name'>
						Name
					</label>
					<input className='form-input' type='text' id='name' name='name' />
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
					/>
				</div>

				<div className='form-control'>
					<label className='form-label' htmlFor='occupation'>
						Occupation
					</label>
					<select className='form-input' name='occupation'>
						<option value='london'>London</option>
						<option value='new-york'>New York</option>
						<option value='coconut'>Sidney</option>
						<option value='mango'>Berlin</option>
					</select>
				</div>

				<div className='form-control'>
					<label className='form-label' htmlFor='about'>
						About
					</label>
					<textarea className='form-input' name='about'></textarea>
				</div>

				<button className='submit-button' type='submit'>
					Submit
				</button>
			</form>
		)
	}
}

export default UserForm
