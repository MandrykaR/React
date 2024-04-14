import React from 'react'

const Expand = ({ title, children, isOpen, toggleExpand }) => {
	return (
		<div className='expand border'>
			<div className='expand__header'>
				<span className='expand__title'>{title}</span>
				<button onClick={toggleExpand} className='expand__toggle-btn'>
					<i
						className={`fa-solid ${isOpen ? 'fa-arrow-up' : 'fa-arrow-down'}`}
					></i>
				</button>
			</div>
			{isOpen && <div className='expand__content'>{children}</div>}
		</div>
	)
}

export default Expand
