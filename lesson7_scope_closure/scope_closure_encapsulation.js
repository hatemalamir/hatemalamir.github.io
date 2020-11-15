// Example array
const a = [1, 2, 3, 4, 5]; 
console.log(">>> a = [" + a + "]");
// sum all array elements using a reducer
const sum = a.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(">>> Sum of a = [" + sum + "]");
// multiplying all array elements using a reducer
const prod = a.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(">>> Product of a = " + prod + "");
// sample string 
const str = "abcde"
console.log(">>> str: " + a);
// reverese of the string
const rev = str.split("").map((elem, index, arr) => arr[arr.length - index - 1]).join("");
console.log(">>> Reverse of str: " + rev);
// sample array of words
const wArr = ["ab", "abc", "abcd", "abcde", "abcdef"]
console.log(">>> wArr  = [" + wArr + "]");
const minLen = 5
// words longer than 5
const wLong = wArr.filter(w => w.length >= minLen);
console.log(">>> Words in wArr longer than or equal " + minLen + " = [" + wLong + "]");
