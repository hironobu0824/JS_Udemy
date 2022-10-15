// 変数や定数の命名規則

// $と_のみ特殊文字を使うことができる
let tomatoCount;
let $tomato$Count;
let _tomato_Count;

// 数字はOKだが先頭には置けない
let tomatoCount7; // OK
let 7tomatoCount; // NG

// 予約語は使えない
let const; //NG

//　日本語使える
let トマトカウント;

// 大文字と小文字は使い分ける
let baseball;
let baseBall;

// 命名規則
tomatoCount; // キャメルケース[JSのベストプラクティス]
tomato_count; // スネークケース[バッドプラクティス]
TomatoCount; // パスカルケース