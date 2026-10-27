
// interface User = {
//     id: number,
//     name: string,
//     age?: number,
// }

type MemberRole = "user" | "admin"

type User = {
    id: number,
    name: string,
    age?: number,
    role: MemberRole //타입 참조
}

const user1: User = {
    id:1,
    name:"도로롱",
    age:17,
    role: "admin"
}

const user2: User = {
    id:2,
    name:"구구가가",
    age:18,
    role:"user",
}

console.log(`회원 1 - ID: ${user1.id}, 이름 : ${user1.name}, 
    나이 : ${user1.age}, 권한 : ${user1.role}`);
console.log(`회원 2 - ID: ${user2.id}, 이름 : ${user2.name}, 
    나이 : ${user2.age}, 권한 : ${user2.role}`);
