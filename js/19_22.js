// 型の変換

'10' + '10' // '1010'

// number型であっても、自動的に文字列に変換される
'10' + 10  //'1010'

// string型であっても、自動的に数値に変換される（足し算以外は文字列にはないから）
'10' * 10 // 100

// NaN（数値型）
'hello' * 10 // NaN


// 明示的に型を変換する
// string->number
const userInput = '10.1';
let calcResult;
calcResult = Number(userInput) + 10; // 20.1
calcResult = parseInt(userInput) + 10; // 20
calcResult = parseFloat(userInput) + 10; // 20.1
calcResult = +userInput + 10; // 20.1
// number->string
const tenNumber = 10;
calcResult = '10' + String(tenNumber); // 1010
calcResult = '10' + tenNumber.toString(); // 1010


// 真偽値(boolean) 
// true or false


// 配列(array)

let array = ['apple' , 'banana', 'grape'];
console.log(array[0]); // 'apple'

// 値追加
array = [];
array.push('apple');
console.log(array); // ['apple']
