//literal way
let arr=[10,202,30,40,50];
console.log(arr);

//new keyword
let arr1=new Array("java",20,30,40,50);
console.log(arr1);

console.log("-----------------------------------------");
//Arrays Inbuilt functions

let arr2=[null,true,50000,'javascrpit'];
console.log(arr2);

// arr2.push("python","c",60000); //add element at last and also add the multiple elements
// console.log(arr2);

// arr2.push(...arr);//spread operator is used to add the elements of one array into another array
// console.log(arr2);


arr2.push(41,'java');
console.log(arr2);

arr2.pop();//remove the last element from the array)

console.log(arr2);


arr2.shift();//for deleting the first element from the array
arr2.shift();
console.log(arr2);


arr2.unshift('python',true);//for adding the element at the first position of the array
console.log(arr2);

arr2.splice(2,2);//for deleting the elements from the array from where we want to delete and how many elements we want to delete
console.log(arr2);

arr2.splice(1,0,'c','c++');//for adding the elements into the array from where we want to add and how many elements we want to delete
console.log(arr2);

