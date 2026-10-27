"use strict";
//Record<keys,Type>는 
// 객체의 키와 값의 타입을 간편하게 정의할 수 있게 도와주는 유틸리티 타입
const prices = {
    apple: 2000,
    banana: 3000,
    avocado: 5000,
};
console.log(`사과의 가격 : ${prices.apple}`);
const translations = {
    hello: "안녕하세요",
    goodbye: "안녕히 가세요",
};
console.log(translations.hello);
console.log(translations.goodbye);
