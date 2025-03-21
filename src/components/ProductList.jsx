import React from 'react'

const ProductList = ({ products }) => {
	return (
		<div className='product-list'>
			{products.length > 0 ? (
				products.map((product, index) => (
					<div key={index} className='product-card'>
						<h3>{product.name}</h3>
						<h4>Цена: {product.price_per_pack}₽</h4>
						<h5>Цена шт: {product.price_per_unit}₽</h5>
					</div>
				))
			) : (
				<p>Товары не найдены</p>
			)}
		</div>
	)
}

export default ProductList
