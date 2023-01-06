const log = console.log;

// 제너레이터 / 이터레이터
// - 제너레이터 : 이터레이터이자 이터러블을 생성하는 함수

function *gen() {
    yield 1;
    yield 2;
    yield 3;
    if (false) yield 4;
    return 100;     // 순회 시 리턴값은 제외됨.
}
let iter = gen();
log(iter[Symbol.iterator]() == iter);
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());

for(const a of gen()) log(a);


// odds
log("---- odds ------");
function *infinity(i = 0) {
    while (true) yield i++;
}   // next()를 할 때마다 생성되기 때문에 프로그램이 멈추거나 종료되지 않고 사용할 수 있음.
function *limit(l, iter) {
    for( const a of iter) {
        yield a;
        if(a == l) return;
    }
}
function *odds(l) {
    for( const a of limit(l, infinity(1))) {
        if(a % 2) yield a;
    }
}
let iter2 = odds(10);
log(iter2.next());
log(iter2.next());
log(iter2.next());
log(iter2.next());
log(iter2.next());
log(iter2.next());
log(iter2.next());

// for(const a of odds(40)) log(a);

// for of , 전개 연산자, 구조 분해, 나머지 연산자
log("----- for of ------");
log(...odds(10));
log([...odds(10), ...odds(20)]);

const [head, ...tail] = odds(5);
log(head);
log(tail);

const [a, b, ...rest] = odds(10);
log(a);
log(b);
log(rest);