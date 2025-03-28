import React, { useState } from 'react'

const ProductList = ({ products, onAddToCart }) => {
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

	const handleAddToCart = (product, index) => {
		const packQuantity = counts[index].pack
		const unitQuantity = counts[index].unit
		if (packQuantity > 0 || unitQuantity > 0) {
			onAddToCart(
				product.name,
				product.price_per_pack,
				product.price_per_unit,
				packQuantity,
				unitQuantity
			)
		}
	}

	return (
		<div className='product-list'>
			{products.length > 0 ? (
				products.map((product, index) => (
					<div key={index} className='product-card'>
						<h3>{product.name}</h3>
						<div className='price-line'>
							<h4>Упаковка: {product.price_per_pack}₽</h4>
							<div className='counter'>
								<button onClick={() => decrement(index, 'pack')}>-</button>
								<span>{counts[index].pack}</span>
								<button onClick={() => increment(index, 'pack')}>+</button>
							</div>
						</div>
						<div className='price-line'>
							<h5>За штуку: {product.price_per_unit}₽</h5>
							<div className='counter'>
								<button onClick={() => decrement(index, 'unit')}>-</button>
								<span>{counts[index].unit}</span>
								<button onClick={() => increment(index, 'unit')}>+</button>
							</div>
						</div>
						<button
							className='add-corzine'
							onClick={() => handleAddToCart(product, index)}
						>
							Добавить в корзину
						</button>
					</div>
				))
			) : (
				<p>Товары не найдены</p>
			)}
		</div>
	)
}

export default ProductList
