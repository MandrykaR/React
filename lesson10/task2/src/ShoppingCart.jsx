import React from 'react'
import ProductsList from './ProductsList.jsx'
import CartTitle from './CartTitle.jsx'

class ShoppingCart extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			cartItems: [
				{
					id: '1',
					name: 'iPhone 11',
					price: 999,
				},
				{
					id: '2',
					name: 'iPhone 12',
					price: 1200,
				},
				{
					id: '3',
					name: 'iPhone 17',
					price: 3232,
				},
			],
		}
	}

	render() {
		const { userName } = this.props
		const count = this.state.cartItems.length
		return (
			<div className='column'>
				<CartTitle userName={userName} count={count} />
				<ProductsList cartItems={this.state.cartItems} />
			</div>
		)
	}
}
export default ShoppingCart
