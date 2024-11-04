/*let varObject = { name: "Об'єкт" };
let varArray = [1, 2, 3];
let varString = "Привіт";
let varNumber = 42;
let varFunction = function() { return "Я типу цей.. Функція"; };

console.log("Object:", varObject, typeof varObject);  
console.log("Array:", varArray, typeof varArray);     
console.log("String:", varString, typeof varString); 
console.log("Number:", varNumber, typeof varNumber);  
console.log("Function:", varFunction, typeof varFunction); 

///2

varString = 123;
varNumber = "456";

console.log("Літери як числа:", varString, typeof varString);
console.log("Числа як літери:", varNumber, typeof varNumber); 

//3
console.log("Comparing '123' == 123:", "123" == 123);  
console.log("Comparing '123' === 123:", "123" === 123); 

//4
function encodeNumber(num) {
    return num.toString(16); 
}

function decodeNumber(hex) {
    return parseInt(hex, 16); 
}

let encoded = encodeNumber(12345);
console.log("Зашифроване число:", encoded);

let decoded = decodeNumber(encoded);
console.log("Дешифроване число:", decoded);*/





/*let x = 5;
let y = -x; 
let z = !true; 
let a = x++; 
let b = y--; 
let c = typeof x; 


let sum = 10 + 5; 
let mult = 20 * 4; 
let div = 15 / 3; 
let comparison = x >= y; 
let and = true && false; 
let or = true || false; 

let age = 20;
let status = age >= 18 ? "дорослий" : "неповнолітній";

const line1 = "Нехай завжди буде сонце";
const line2 = "Нехай завжди буде небо";
const line3 = "Нехай завжди буде мама";
const line4 = "Нехай завжди буду я";

const poem = line1.concat(
    "\n", line2,
    "\n", line3,
    "\n", line4
);

console.log(poem);*/


/*function findMaxSubarray(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxEndingHere + arr[i]) {
            maxEndingHere = arr[i];
            tempStart = i;
        } else {
            maxEndingHere = maxEndingHere + arr[i];
        }

        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            start = tempStart;
            end = i;
        }
    }

    return {
        maxSum: maxSoFar,
        subarray: arr.slice(start, end + 1),
        start: start,
        end: end
    };
}


const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(findMaxSubarray(arr));*/



/*function addLargeNumbers(num1, num2) {
    const maxLength = Math.max(num1.length, num2.length);
    num1 = num1.padStart(maxLength, '0');
    num2 = num2.padStart(maxLength, '0');

    let carry = 0;
    let result = '';

    for (let i = maxLength - 1; i >= 0; i--) {
        const digit1 = parseInt(num1[i]) || 0;
        const digit2 = parseInt(num2[i]) || 0;
        const sum = digit1 + digit2 + carry;

        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }

    if (carry > 0) {
        result = carry + result;
    }

    return result;
}

console.log(addLargeNumbers('999999999999999', '1'));*/



/*function arrayDifference(arr1, arr2) {
    const countMap = new Map();
    arr1.forEach(item => {
        countMap.set(item, (countMap.get(item) || 0) + 1);
    });

    arr2.forEach(item => {
        if (countMap.has(item)) {
            const count = countMap.get(item);
            if (count === 1) {
                countMap.delete(item);
            } else {
                countMap.set(item, count - 1);
            }
        }
    });

    const result = [];
    countMap.forEach((count, item) => {
        for (let i = 0; i < count; i++) {
            result.push(item);
        }
    });

    return result;
}*/

var foo = 1;  
function bar() { 
     
    if (!foo) {  
        var foo = 10;  
    }  
    alert(foo);  
}  
bar(); 