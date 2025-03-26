// import React from 'react'

// const ProductList = ({ products }) => {
// 	return (
// 		<div className='product-list'>
// 			{products.length > 0 ? (
// 				products.map((product, index) => (
// 					<div key={index} className='product-card'>
// 						<h3>{product.name}</h3>
// 						<h4>Цена: {product.price_per_pack}₽</h4>
// 						<h5>Цена шт: {product.price_per_unit}₽</h5>
// 					</div>
// 				))
// 			) : (
// 				<p>Товары не найдены</p>
// 			)}
// 		</div>
// 	)
// }

// export default ProductList

import React, { useState } from 'react'

const ProductList = ({ products }) => {
	const [counts, setCounts] = useState(
		products.map(() => ({ pack: 0, unit: 0 }))
	)

	const increment = (index, type) => {
		const newCounts = [...counts]
		newCounts[index][type] += 1
		setCounts(newCounts)
	}

	const decrement = (index, type) => {
		const newCounts = [...counts]
		if (newCounts[index][type] > 0) {
			newCounts[index][type] -= 1
			setCounts(newCounts)
		}
	}

	return (
		<div className='product-list'>
			{products.length > 0 ? (
				products.map((product, index) => (
					<div key={index} className='product-card'>
						<h3>{product.name}</h3>

						<div className='price-line'>
							<h4>Цена: {product.price_per_pack}₽</h4>
							<div className='counter'>
								<button onClick={() => decrement(index, 'pack')}>-</button>
								<span>{counts[index].pack}</span>
								<button onClick={() => increment(index, 'pack')}>+</button>
							</div>
						</div>

						<div className='price-line'>
							<h5>ШТ: {product.price_per_unit}₽</h5>
							<div className='counter'>
								<button onClick={() => decrement(index, 'unit')}>-</button>
								<span>{counts[index].unit}</span>
								<button onClick={() => increment(index, 'unit')}>+</button>
							</div>
						</div>
					</div>
				))
			) : (
				<p>Товары не найдены</p>
			)}
		</div>
	)
}

export default ProductList
