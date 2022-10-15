// オブジェクト
// ５つ目の型(string、number、boolean、array、object)。まとまったデータを表す型

const coffee = {
    name: 'Chocolate Mocha',
    size: 350,
    isHot: true,
    toppings: ['Cinamon', 'Caramel'],
    nutritions: {
        calories: 430,
        sugars: 53,
    },
};
// キーとバリューの組み合わせでプロパティ
// どんな型でも入れられる。

// 呼び出し
console.log(coffee.size);
// 変更
coffee.isHot = false;
// 追加
coffee.barista = 'hironobu';
