import React from 'react'

class Expand extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: false,
		}
	}

	toggleExpand = () => {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen,
		}))
	}

	render() {
		const { title, children } = this.props

		return (
			<div className='expand border'>
				<div className='expand__header'>
					<span className='expand__title'>{title}</span>
					<button onClick={this.toggleExpand} className='expand__toggle-btn'>
						<i
							className={`fa-solid ${
								this.state.isOpen ? 'fa-arrow-up' : 'fa-arrow-down'
							}`}
						></i>
					</button>
				</div>
				{this.state.isOpen && <div className='expand__content'>{children}</div>}
			</div>
		)
	}
}

export default Expand
