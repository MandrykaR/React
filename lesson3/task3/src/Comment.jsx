import React from 'react'
import moment from 'moment'
import UserInfo from './UserInfo'

import './comment.scss'

const formatDate = date => moment(date).format('DD MMM YYYY')

const Comment = ({ author, text, date }) => {
	return (
		<div className='comment'>
			<UserInfo user={author} />
			<div className='comment__text'>{text}</div>
			<div className='comment__date'>{formatDate(date)}</div>
		</div>
	)
}

export default Comment
