import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState({})

	// Функция для добавления товара в корзину
	const addItemToCart = (
		name,
		pricePerPack,
		pricePerUnit,
		packQuantity,
		unitQuantity
	) => {
		setCart(prevCart => {
			const updatedCart = { ...prevCart }
			if (updatedCart[name]) {
				updatedCart[name].packQuantity += packQuantity
				updatedCart[name].unitQuantity += unitQuantity
			} else {
				updatedCart[name] = {
					pricePerPack,
					pricePerUnit,
					packQuantity,
					unitQuantity,
				}
			}
			return updatedCart
		})
	}

	// Функция для обновления количества товара в корзине
	const updateItemQuantity = (name, type, quantity) => {
		setCart(prevCart => {
			const updatedCart = { ...prevCart }
			if (updatedCart[name]) {
				if (type === 'pack') {
					updatedCart[name].packQuantity = quantity
				} else if (type === 'unit') {
					updatedCart[name].unitQuantity = quantity
				}
			}
			return updatedCart
		})
	}

	// Функция для удаления товара из корзины
	const removeItemFromCart = name => {
		setCart(prevCart => {
			const updatedCart = { ...prevCart }
			delete updatedCart[name]
			return updatedCart
		})
	}

	// Функция для очистки корзины
	const clearCart = () => {
		setCart({})
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				addItemToCart,
				updateItemQuantity,
				removeItemFromCart,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => useContext(CartContext)
