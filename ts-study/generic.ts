// 제네릭을 사용한 배열
const scores: Array<number> = [80,90,100]
console.log(scores);
console.log(scores[0] + scores[1]);

//제네릭 함수

function getFirst<T>(arr: T[]){
    return arr[0];
}

const num = getFirst<number>([10,20,30]);
const str = getFirst<string>(["아보카도","바나나","두리안"])

console.log(num,str);
// console.log(str);


