"use strict";
//학생 객체
const student1 = {
    id: 1,
    name: "도로롱",
    subjects: [{ courseId: 101, courseName: "수학", grade: `A` },
        { courseId: 102, courseName: "국어", grade: `F` },
        { courseId: 103, courseName: "영어", grade: `F` }]
};
student1.subjects.forEach(subject => console.log(`과목명 ${subject.courseName}`));
