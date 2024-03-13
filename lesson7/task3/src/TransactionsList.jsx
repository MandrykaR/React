import React from 'react'
import Transaction from './Transaction.jsx'

const TransactionList = ({ transactions }) => {
	return (
		<ul className='transactions'>
			{transactions.map(transaction => (
				<Transaction
					key={transaction.id}
					from={transaction.from}
					to={transaction.to}
					amount={transaction.amount}
					rate={transaction.rate}
					time={transaction.time}
				/>
			))}
		</ul>
	)
}

export default TransactionList
