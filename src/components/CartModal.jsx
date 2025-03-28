import React from 'react'
import { useCart } from '../CartContext'
import { sendToTelegram } from '/src/sendToTelegram'

const CartModal = ({ onClose }) => {
	const { cart, removeItemFromCart, clearCart, updateItemQuantity } = useCart()

	const handleSendOrder = () => {
		sendToTelegram(cart)
	}

	const totalAmount = Object.values(cart).reduce(
		(sum, item) =>
			sum +
			item.pricePerPack * item.packQuantity +
			item.pricePerUnit * item.unitQuantity,
		0
	)

	return (
		<div className='cart-modal'>
			<div className='cart-content'>
				<div className='cart-header'>
					<h2>Корзина</h2>
					<button className='close-btn' onClick={onClose}>
						Закрыть
					</button>
				</div>
				{Object.keys(cart).length === 0 ? (
					<p>Корзина пуста</p>
				) : (
					<table className='cart-table'>
						<thead>
							<tr>
								<th>Наименование</th>
								<th>Цена упаковки</th>
								<th>Цена за штуку</th>
								<th>Количество упаковок</th>
								<th>Количество штук</th>
								<th>Сумма</th>
								<th>Действие</th>
							</tr>
						</thead>
						<tbody>
							{Object.keys(cart).map(name => {
								const item = cart[name]
								return (
									<tr key={name}>
										<td>{name}</td>
										<td>{item.pricePerPack}₽</td>
										<td>{item.pricePerUnit}₽</td>
										<td>
											<div className='quantity-controls'>
												<button
													onClick={() =>
														updateItemQuantity(
															name,
															'pack',
															item.packQuantity - 1
														)
													}
												>
													-
												</button>
												<span>{item.packQuantity}</span>
												<button
													onClick={() =>
														updateItemQuantity(
															name,
															'pack',
															item.packQuantity + 1
														)
													}
												>
													+
												</button>
											</div>
										</td>
										<td>
											<div className='quantity-controls'>
												<button
													onClick={() =>
														updateItemQuantity(
															name,
															'unit',
															item.unitQuantity - 1
														)
													}
												>
													-
												</button>
												<span>{item.unitQuantity}</span>
												<button
													onClick={() =>
														updateItemQuantity(
															name,
															'unit',
															item.unitQuantity + 1
														)
													}
												>
													+
												</button>
											</div>
										</td>
										<td>
											{item.pricePerPack * item.packQuantity +
												item.pricePerUnit * item.unitQuantity}
											₽
										</td>
										<td>
											<button
												className='delate-cart'
												onClick={() => removeItemFromCart(name)}
											>
												Удалить
											</button>
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				)}
				<div className='cart-footer'>
					<div>
						<strong>Итого: {totalAmount}₽</strong>
					</div>
					<div>
						<button className='clear-cart' onClick={clearCart}>
							Очистить корзину
						</button>
						<button className='send-cart' onClick={handleSendOrder}>
							Отправить заказ
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartModal

// import React from 'react'
// import { useCart } from '/src/CartContext' // импортируем ваш контекст корзины
// import { sendToTelegram } from '/src/sendToTelegram' // функция отправки в Telegram

// const CartModal = ({ onClose }) => {
// 	const { cart } = useCart() // Получаем данные из корзины

// 	// Функция для отправки данных из корзины в Telegram
// 	const handleSendOrder = () => {
// 		sendToTelegram(cart)
// 	}

// 	const totalAmount = Object.values(cart).reduce(
// 		(sum, item) =>
// 			sum +
// 			item.pricePerPack * item.packQuantity +
// 			item.pricePerUnit * item.unitQuantity,
// 		0
// 	)

// 	return (
// 		<div className='cart-modal'>
// 			<div className='cart-content'>
// 				<div className='cart-header'>
// 					<h2>Корзина</h2>
// 					<button className='close-btn' onClick={onClose}>
// 						Закрыть
// 					</button>
// 				</div>
// 				{Object.keys(cart).length === 0 ? (
// 					<p>Корзина пуста</p>
// 				) : (
// 					<table className='cart-table'>
// 						<thead>
// 							<tr>
// 								<th>Наименование</th>
// 								<th>Цена упаковки</th>
// 								<th>Цена за штуку</th>
// 								<th>Количество упаковок</th>
// 								<th>Количество штук</th>
// 								<th>Сумма</th>
// 								<th>Действие</th>
// 							</tr>
// 						</thead>
// 						<tbody>
// 							{Object.keys(cart).map(name => {
// 								const item = cart[name]
// 								return (
// 									<tr key={name}>
// 										<td>{name}</td>
// 										<td>{item.pricePerPack}₽</td>
// 										<td>{item.pricePerUnit}₽</td>
// 										<td>{item.packQuantity}</td>
// 										<td>{item.unitQuantity}</td>
// 										<td>
// 											{item.pricePerPack * item.packQuantity +
// 												item.pricePerUnit * item.unitQuantity}
// 											₽
// 										</td>
// 									</tr>
// 								)
// 							})}
// 						</tbody>
// 					</table>
// 				)}
// 				<div className='cart-footer'>
// 					<div>
// 						<strong>Итого: {totalAmount}₽</strong>
// 					</div>
// 					<div>
// 						<button
// 							className='clear-cart'
// 							onClick={() => alert('Очистить корзину')}
// 						>
// 							Очистить корзину
// 						</button>
// 						<button className='send-cart' onClick={handleSendOrder}>
// 							Отправить заказ
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default CartModal
