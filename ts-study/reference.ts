//학생 객체

type Grade = `A` | `B` | `C` | `D` | `F`

interface Course {
    courseId:number,
    courseName:String,
    grade: Grade

}

interface Student {
    id:number,
    name: String,
    subjects: Course[]
}

const student1: Student = {
    id:1,
    name:"도로롱",
    subjects: 
    [{courseId:101, courseName:"수학",grade: `A`},
    {courseId:102, courseName:"국어",grade: `F`},
    {courseId:103, courseName:"영어",grade: `F`}]
}

student1.subjects.forEach(subject =>
    console.log(`과목명 ${subject.courseName}`)
    
);