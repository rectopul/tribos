// /**
//  * Currency
//  * @param {string} currency 
//  */
// export var currency = (coin) => {
//     return coin.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
// }

// /**
//  * Dispatch Event
//  * @param {string} NAME 
//  */
// export var dispatchEvent = (NAME) => {
//     var evt = new Event(NAME);
//     return document.dispatchEvent(evt);
// }

// /**
//  * Listener Event
//  * @param {string} NAME 
//  * @param {function} CB 
//  */
// export var listenerEvent = (NAME, CB) => {
//     return document.addEventListener(NAME, CB, false); 
// }