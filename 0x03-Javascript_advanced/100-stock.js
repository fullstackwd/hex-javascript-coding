const stock = {
	macbook: 2,
	iphone: 4
}

function processPayment(itemName) {
	this[itemName] -= 1
	console.log(`Payment is being processed for item ${itemName}`)
}

function processError(itemName) {
	console.log(`No more ${itemName} in stock`)
	console.log("Payment is not being processed")
}

function processOrder(itemName, callbackPayment, callbackError) {

	console.log(`Verifying the stock of ${itemName}`)
	if (this[itemName] > 0) {
		callbackPayment(itemName);
	} else {
		callbackError(itemName);
	}
}

let bindProcessOrder = processOrder.bind(stock);
let bindProcessPayment = processPayment.bind(stock);
let bindProcessError = processError.bind(stock);

let itemToOrder = (prompt('Please enter the item you would like to purchase (macbook, iphone)'));
while (itemToOrder != "macbook" && itemToOrder != "iphone" && itemToOrder != 0) {
	itemToOrder = prompt('Please enter macbook or iphone to begin purchase process or 0 to exit')
}
if (itemToOrder != 0) {
	bindProcessOrder(itemToOrder, bindProcessPayment, bindProcessError);
} else {
	alert("ha salido de la aplicacion")
}

