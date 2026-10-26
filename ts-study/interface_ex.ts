interface Member{
    name: string, //필수 속성
    age?: number, //선택 속성

}

const member1: Member = {
    name:"도로롱",
    age:5,
}
const member2: Member = {
    name:"구구가가",
    
}

console.log(`이름 : ${member1.name}, 나이 : ${member1.age}`);
console.log(`이름 : ${member2.name}, 나이 : ${member2.age}`);
