import React from 'react'

const ProductList = ({ products }) => {
	return (
		<div className='product-list'>
			{products.length > 0 ? (
				products.map((product, index) => (
					<div key={index} className='product-card'>
						<h3>{product.name}</h3>
						<p>Цена: {product.price}₽</p>
					</div>
				))
			) : (
				<p>Товары не найдены</p>
			)}
		</div>
	)
}

export default ProductList
