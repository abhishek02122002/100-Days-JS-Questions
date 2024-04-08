/*
write a function findLongestWord that takes a string as input and return the longest 
word in the string.If there are multiple longest words,return the first one encountered.

Notes: 
-> If the input string is empty or contains only whitespaces,the function should return an false.
-> The function should ignore leading and trailing whitespaces when determining the longest word.
*/

//      method-one

// const findLongestWord =(str)=>{
//      if(str.trim().length===0){
//           return false;
//      }
//      words=str.split(" ");
//      words=words.sort((a,b)=>a.length-b.length);
//      return words.at(-1);
// }

//         method-two
const findLongestWord=(str)=>{
     if(str.trim().length===0){
          return false;
     }
     words=str.split(" ");
     return words.reduce(
          (acc,curr)=>
          (curr.length > acc.length ? curr:acc)," "
     );
}
console.log(findLongestWord("Hello This is Abhishek Singh , a fullstack-developer in the process."))