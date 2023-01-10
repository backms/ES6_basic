const log = console.log;

const products = [
    { name : '반팔티', price : 15000 },
    { name : '긴팔티', price : 20000 },
    { name : '핸드폰케이스', price : 15000 },
    { name : '후드티', price : 30000 },
    { name : '바지', price : 25000 }
]

// map
const map = (f, iter) => {
    let res = [];
    for(const a of iter){
        res.push(f(a));
    }
    return res;
};

let names = [];
for(const p of products){
    names.push(p.name);
}
log(names);

log(map(p => p.name, products));        // p => p.name 의 표현이 왜 이렇게 되는지 궁금..

let prices = [];
for(const p of products){
    prices.push(p.price);
}
log(prices);

log(map(p => p.price, products));


// 이터러블 프로토콜을 따른 map의 다형성
log([1,2,3].map(a => a + 1));

function *gen(){
    yield 2;
    yield 3;
    yield 4;
}
log(map(a => a * a, gen()));

let m = new Map();
m.set('a', 10);
m.set('b', 20);
const it = m[Symbol.iterator]();
// log(it.next());
// log(it.next());
// log(it.next());
log(map(([k,a]) => [k, a*2], m));
log(new Map(map(([k,a]) => [k, a*2], m)));


// filter



// reduce