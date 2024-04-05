import React from 'react'

const ProductsList = ({ cartItems }) => {
	const total = cartItems.reduce((acc, item) => acc + item.price, 0)
	return (
		<div class='column'>
			<div class='products'>
				<ul class='products__list'>
					{cartItems.map(item => (
						<li class='products__list-item'>
							<span class='products__item-name'>{item.name}</span>
							<span class='products__item-price'>${item.price}</span>
						</li>
					))}
				</ul>
				<div class='products__total'>Total: ${total}</div>
			</div>
		</div>
	)
}
export default ProductsList
