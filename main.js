// 11
const arr = [1, 2, 10, 3, 7.5, 4, -15, 5, 7.5, "first", "second", "third"];
let word = 'qQ wearR Rty12 21aI'

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 12

for (let i = 0; i < arr.length; i++) {
    if (+arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 13

for (let i = 0; i < arr.length; i++) {
    if (+arr[i] % 2 === 1) {
        console.log(arr[i]);
    }
}

// 14
let b = null;

for (let i = 0; i < arr.length; i++) {
    if (+arr[i] > b) {
        b = arr[i];
    }
}

console.log("biggest num: ", b)

// 15
let smallest = null;

for (let i = 0; i < arr.length; i++) {
    if (+arr[i] < b) {
        b = arr[i];
    }
}

console.log("smallest num: ", b)

// 16

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
        sum += arr[i];
    }
}

console.log("Sum: ", sum)

// 17
console.log("Musbat sonlar: ")

for (let i = 0; i < arr.length; i++) {
    if (+arr[i] > 0) {
        console.log(arr[i]);
    }
}

// 18
console.log("Manfiy sonlar: ")

for (let i = 0; i < arr.length; i++) {
    if (+arr[i] < 0) {
        console.log(arr[i]);
    }
}

// 19
console.log("Updated array:")

let updated_array = [];

for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        updated_array.push(+arr[i] * 2)
    }else{
        updated_array.push(arr[i])
    }
}

console.log(updated_array)

// 20
console.log("Updated array:")

let updated_array_2 = [];

for (let i = 0; i < arr.length; i++) {
    if (Math.trunc(arr[i]) % 2 === 1 || Math.trunc(arr[i]) % 2 === -1) {
        continue;
    }else{
        updated_array_2.push(arr[i])
    }
}

console.log(updated_array_2)

// 21
console.log("N22:");

for (let i = 0; i < word.length; i++) {
    console.log(word[i])
}

// 22

console.log("N22:");

let count_upperL = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] >= "A" && word[i] <= "Z") {
        count_upperL++;
    }
}

console.log("Upper letters are:", count_upperL)

// 23

console.log("N23:");

let count_lowerL = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] >= "a" && word[i] <= "z") {
        count_lowerL++;
    }
}

console.log("Upper letters are:", count_lowerL)

// 24

console.log("N24:");

let count_numbers = 0;

for (let i = 0; i < word.length; i++) {
    if (!isNaN(word[i])) {
        count_numbers++;
    }
}

console.log("Numbers are:", count_numbers)

// 25

console.log("N25:");

let count_spaces = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") {
        count_spaces++;
    }
}

console.log("Spaces are:", count_spaces)

// 26

console.log("N26:");

for (let i = word.length-1; i >= 0 ; i--) {
    console.log(word[i])
}
 
// 27

console.log("N27:");

let count_aLetter = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] === "a") {
        count_aLetter++;
    }
}

console.log("a-letters are:", count_aLetter)

// 28
console.log("N28")

const wordsArray = word.split(" ");

console.log(wordsArray);

// 29
console.log("N29")

for (let i = 0; i < arr.length; i+=2) {
    console.log(arr[i]);
}

// 30
console.log("N30");

sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
        sum += arr[i];
    }
}

console.log("Sum: ", sum)