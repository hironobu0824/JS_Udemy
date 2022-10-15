// データの型(type)

// number型
let number = 10;
number = -4;
number = 32.42;

// string型
let string = 'Hello';

    const userName = 'hironobu'; // シングルクオート
    const userSex = "男"; // ダブルクオート
    let userAge = `24歳`; // バッククオート

    // 文字列連結
    string = 'Hello' + userName + '!';
    // バッククオートでのみ変数展開できる。変数は${}で囲む
    string = `Hello ${userName}!`;

    // クオートをそのまま表示したい時は、それ以外のクオートで囲むとよい。
    string = " ' ";

    // 改行
    // \nを使うと改行できる
    string = 'Hello\nHironobu'
    // ``（バッククオート内では改行がそのまま反映される）
    string = `Hello
hironobu`

// number型の変数にstringを代入する
number = 'something'; // 動的型付け言語だからできる



