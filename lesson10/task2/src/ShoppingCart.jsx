import React from 'react'
import ProductsList from './ProductsList.jsx'
import CartTitle from './CartTitle.jsx'

class ShoppingCart extends React.Component {
	state = {
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

	render() {
		const count = this.state.cartItems.length
		return (
			<div class='column'>
				<CartTitle userName={this.props.userData.firstName} count={count} />
				<ProductsList cartItems={this.state.cartItems} />
			</div>
		)
	}
}
export default ShoppingCart
