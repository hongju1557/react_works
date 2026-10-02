// map () 배열의 각 요소에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환하는 함수
const arr = [1,2,3];

// newArr = [2,4,6];
const newArr = arr.map(x=> x*2);
console.log(newArr);

// 객체가 요소인 배열
const users = [
    {name : "Jerry", age: 25},
    {name : "Trump", age: 83},
    {name : "Tom", age: 23},
]

//이름
console.log(users[0].name);
//나이
console.log(users[1].age);
// 배열에서 이름만 출력
const names = users.map((user)=> user.name);
console.log(names);

//filter() - 배열의 각 요소 중 조건이 참인 요소만 모아
// 새로운 배열을 반환하는 함수

const nums = [1,2,3,4,5];

//배열에서 짝수만 출력 (nums % 2 == 0)
const evens =  nums.filter((num)=> num%2 == 0);
console.log(evens);

//users에서 나이가 30 이상인 회원 출력
const adults = users.filter((user)=>user.age >=30);
console.log(adults);

//users에서 나이가 30이상인 회원의 이름 출력 - filter, map 사용
const adultnames = users.filter((user)=>user.age>=30)
                    .map((user)=>user.name);
                    
console.log(adultnames);

// foreach()

const userNames = []; // 빈 배열
users.forEach(user => {
    userNames.push(user.name); // 요소 추가
})

console.log(userNames);





