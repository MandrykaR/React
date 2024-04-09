import React, { useState } from 'react'
import ProductTable from './ProductTable.jsx'
import SearchBar from './SearchBar.jsx'

const FilterableProductTable = ({ products }) => {
	const [filterText, setFilterText] = useState('')
	const [inStockOnly, setInStockOnly] = useState(false)

	return (
		<div>
			<SearchBar
				filterText={filterText}
				inStockOnly={inStockOnly}
				onFilterTextChange={setFilterText}
				onInStockOnlyChange={setInStockOnly}
			/>
			<ProductTable
				filterText={filterText}
				inStockOnly={inStockOnly}
				products={products}
			/>
		</div>
	)
}

export default FilterableProductTable
