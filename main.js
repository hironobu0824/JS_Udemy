// 関数

// 関数の後ろには;をつけない。
// オブジェクト以外の{}をブロック文という。ブロック文は;をつけない。
function add() {
    console.log(1 + 1);
}

add();

// パラメータと引数
    function add2(num1, num2) {
        console.log(num1 + num2);
    }

    add2(2,3);
    // num1,num2をパラメータ。2,3を引数という。

    add2(2);
    // 第二引数を渡さないと、num2がundefindになり、2 + undefinedが行われ、NaNになる。

// 戻り値
    function add3(num1, num2) {
        return num1 + num2;
    }

    console.log(add3(2,3));

    // returnをすると処理が終わる。
    // return だけだと、undefindが返る