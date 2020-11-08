function max(param1, param2) {
	if (param2 > param1)
		return param2;
	return param1;
}
let arg1 = 10
let arg2 = 20
console.assert(arg2 === max(arg1, arg2))
console.log("Expected output of max(" + arg1 + ", " + arg2 + ") is " + arg2 + "  " +
	myFunctionTest(arg2, function(){return max(arg1, arg2);}));


function maxOfThree(param1, param2, param3) {
	let max = param1
	if (param2 > max)
		max = param2;
	if(param3 > max)
		max = param3;
	return max;
}
arg1 = 10
arg2 = 20
let arg3 = 30
console.assert(arg3 === maxOfThree(arg1, arg2, arg3))
console.log("Expected output of maxOfThree(" + arg1 + ", " + arg2 + ", " + arg3 + ") is "
	+ arg3 + "  " + myFunctionTest(arg3, function(){return maxOfThree(arg1, arg2, arg3);}));


function isVowel(ch) {
	if(typeof ch !== "string" || ch.length !== 1)
		return false;
	if(ch === "a" ||
		ch === "e" ||
		ch === "i" ||
		ch === "o" ||
		ch === "u")
		return true;
	return false;
}
arg1 = "i";
console.assert(true === isVowel(arg1));
console.log("Expected output of isVowel(" + arg1 + ") is true  " +
	myFunctionTest(true, function(){return isVowel(arg1);}));


function sum(arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++)
		sum += arr[i];
	return sum;
}
arg1 = [1, 2, 3, 4];
console.assert(10 === sum(arg1));
console.log("Expected output of sum(" + arg1 + ") is 10  " +
	myFunctionTest(10, function(){return sum(arg1);}));


function multiply(arr) {
	let prod = 1;
	for(let i = 0; i < arr.length; i++)
		prod *= arr[i];
	return prod;
}
console.assert(24 === multiply(arg1))
console.log("Expected output of multiply(" + arg1 + ") is 24  " +
	myFunctionTest(10, function(){return sum(arg1);}));


function reverse(str) {
	let rev = ""
	for(let i = str.length -1; i >= 0; i--)
		rev += str.charAt(i)
	return rev;
}
arg1 = "jag testar";
console.assert("ratset gaj" === reverse(arg1));
console.log("Expected output of reverse('" + arg1 + "') is 'ratset gaj'  " +
	myFunctionTest("ratset gaj", function(){return reverse(arg1);}));


function findLongestWord(arr) {
	let maxLen = 0;
	for(let i = 0; i < arr.length; i++)
		if(arr[i].length > maxLen)
			maxLen = arr[i].length
	return maxLen;
}
arg1 = ["abc", "ab", "", "abcd"];
console.assert(4 === findLongestWord(arg1));
console.log("Expected output of findLongestWord(" + arg1 + ") is 4  " +
	myFunctionTest(4, function(){return findLongestWord(arg1);}));


function filterLongWords(arr, minLen) {
	let res = [];
	for(let i = 0; i < arr.length; i++)
		if(arr[i].length > minLen)
			res.push(arr[i]);
	return res;
}
arg1 = ["abc", "ab", "", "abcd", "abcde"];
arg2 = 3;
console.assert(compareArrays(["abcd", "abcde"], filterLongWords(arg1, arg2)));
console.log("Expected output of filterLongWords([" +
	arg1 + "], " + arg2 + ") is  ['abcd', 'abcde']  " +
	myFunctionTest(["abcd", "abcde"], function(){return filterLongWords(arg1, arg2);}));


function myFunctionTest(expRes, resFunc) {
	let res = resFunc();
	if((expRes instanceof Array && compareArrays(expRes, res)) || expRes === res)
		return "TEST SUCCEEDED"
	return "TEST FAILED"
}


const a = [1,3,5,3,3]; 
console.log(">>> a = [" + a + "]");
const b = a.map(function(elem, i, array) {
  return elem * 10;
})
console.log(">>> Times 10 = [" + b + "]");
const c = a.filter(function(elem, i, array){
  return elem === 3;});
console.log(">>> All 3s = [" + c + "]");
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
console.log(">>> Product = " + d + "");


function compareArrays(arr1, arr2) {
	if(arr1.length !== arr2.length)
		return false;
	for(let i = 0; i < arr1.length; i++)
		if(arr1[i] !== arr2[i])
			return false;
	return true;
}
