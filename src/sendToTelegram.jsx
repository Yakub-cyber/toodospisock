import axios from 'axios'

// Функция для отправки данных в Telegram
export const sendToTelegram = async cartData => {
	const botToken = '7902481935:AAFU51NsKHKqlaIkxSYMyJKX3ov8zT6c_rI'
	const chatId = '1437540633'

	// Формируем текст сообщения для отправки
	let message = 'Новый заказ:\n\n'

	Object.keys(cartData).forEach(name => {
		const item = cartData[name]
		message += `
    Товар: ${name}
    Цена за упаковку: ${item.pricePerPack}₽
    Цена за штуку: ${item.pricePerUnit}₽
    Количество упаковок: ${item.packQuantity}
    Количество штук: ${item.unitQuantity}
    Сумма: ${
			item.pricePerPack * item.packQuantity +
			item.pricePerUnit * item.unitQuantity
		}₽
    ----------------------------------------
    `
	})

	// Отправка запроса в Telegram API
	const url = `https://api.telegram.org/bot${botToken}/sendMessage`
	try {
		await axios.post(url, {
			chat_id: chatId,
			text: message,
			parse_mode: 'Markdown',
		})
		alert('Заказ отправлен!')
	} catch (error) {
		console.error('Ошибка отправки в Telegram:', error)
		alert('Произошла ошибка при отправке заказа.')
	}
}
