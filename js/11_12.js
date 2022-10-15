// 変数 = データを入れておくもの

// letで宣言する。０は初期値。
let count = 0;
console.log(count);
// 0

// 初期値を与えずに宣言すると
let x;
console.log(x);
// undefind

// 同じ変数を2回宣言することは出来ない。
let number = 0;
let number = 10;
console.log(number);
// Uncaught SyntaxError: Identifier 'count' has already been declared

// 宣言前に呼び出すとエラー
console.log(y);
let y = 0;
// Uncaught ReferenceError: Cannot access 'y' before initialization

