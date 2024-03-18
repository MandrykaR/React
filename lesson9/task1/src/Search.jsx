import React from 'react'

class Search extends React.Component {
	state = {
		value: '',
	}

	handleChange = e => {
		this.setState({
			value: e.target.value,
		})
	}

	handleSubmit = e => {
		alert('Search text:' + this.state.value)
		e.preventDefault()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className='search'>
				<input
					type='text'
					value={this.state.value}
					onChange={this.handleChange}
					className='search__input'
				/>
				<button type='submit' className='search__button'>
					Search
				</button>
			</form>
		)
	}
}

export default Search
