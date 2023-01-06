const log = console.log;

// 고차 함수
// - 함수를 값으로 다루는 함수

// 함수를 인자로 받아서 실행하는 함수
// - apply1
// - times

const apply1 = f => f(1);
const add2 = a => a + 2;
log(apply1(add2));
log(apply1(a => a - 1));    // 0 출력 되는 이유? : f => f(1)이기 때문에 a에 1이 들어감 결국 1-1=0

const times = (f, n) => {
    let i = -1;
    while(++i < n) f(i);
};

times(log, 3);
times(a => log(a + 10), 3);

// 함수를 만들어 리턴하는 함수 (클로저를 만들어 리턴하는 함수)
// - addMaker

const addMaker = a => b => a + b;
const add10 = addMaker(10);
log(add10);     // 10 출력이 아닌 b => a + b가 출력 되는 이유 : a값을 기억하고있찌만 콘솔에는 b => a + b로 출력
log(add10(5));  // 10 + 5 = 15 출력
log(add10(10)); // 10 + 10 = 20 출력
