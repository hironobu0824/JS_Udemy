// 定数　：　一定の値
// 何の値かを分かりやすくするため。変更があったときに一箇所を変えればいいため。
// 極力定数を使うようにする。

// 再代入できない
const daysInWeek = 7;
daysInWeek = 8;
// Uncaught TypeError: Assignment to constant variable.

//初期値を与えないとエラー
const daysInMonth;
// Uncaught SyntaxError: Missing initializer in const declaration

