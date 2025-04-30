import React, { useState, useEffect } from 'react'
import { CartProvider, useCart } from './CartContext'
import SearchBar from './components/SearchBar.jsx'
import ProductList from './components/ProductList.jsx'
import CartModal from './components/CartModal.jsx'
import './App.css'
import Papa from 'papaparse'

const SHEET_CSV_URL =
	'https://docs.google.com/spreadsheets/d/1ecYUS0bEILKFANqXx3H0X7dLy-SoYiZo/export?format=csv'

const App = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [isCartModalOpen, setCartModalOpen] = useState(false)
	const { addItemToCart } = useCart()
	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(SHEET_CSV_URL)
				const csvText = await response.text()
				Papa.parse(csvText, {
					header: true,
					skipEmptyLines: true,
					complete: results => {
						// Предполагаем, что в таблице есть колонки: Наименование, Опт, Розничный клиент, Склад, Постоянные клиенты
						const formattedData = results.data
							.filter(row => row['Наименование'])
							.map(row => ({
								name: row['Наименование'],
								price_per_pack: parseFloat(row['Опт']) || 0,
								retail: parseFloat(row['Розничный клиент']) || 0,
								stock: parseFloat(row['Склад']) || 0,
								regular: parseFloat(row['Постоянные клиенты']) || 0,
							}))
						setProducts(formattedData)
					},
				})
			} catch (error) {
				console.error('Ошибка загрузки данных из Google Sheets (CSV):', error)
			}
		}
		fetchData()
	}, [])

	const filteredProducts = products.filter(
		product =>
			product.name &&
			product.name.toLowerCase().includes(searchTerm.toLowerCase())
	)

	const handleAddToCart = (
		name,
		pricePerPack,
		pricePerUnit,
		packQuantity,
		unitQuantity
	) => {
		addItemToCart(name, pricePerPack, pricePerUnit, packQuantity, unitQuantity)
	}

	return (
		<div className='app-container'>
			<h1>Поиск товаров</h1>
			<SearchBar setSearchTerm={setSearchTerm} />
			<button className='button-corzina' onClick={() => setCartModalOpen(true)}>
				Открыть корзину
			</button>
			{isCartModalOpen && <CartModal onClose={() => setCartModalOpen(false)} />}
			<ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
		</div>
	)
}

const AppWrapper = () => {
	return (
		<CartProvider>
			<App />
		</CartProvider>
	)
}

export default AppWrapper
