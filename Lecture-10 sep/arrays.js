var arr = [1, 2, 3, 4, "Pratham", "beyblade", true, 1.15];

console.log(arr);

arr.unshift("Shinchan");
console.log(arr);
arr.shift();
console.log(arr);

arr.push("Doraemon");
console.log(arr);
arr.pop();
console.log(arr);


// For of Loop
for(let i of arr){
    console.log(i);
}

for(let indx in arr){
    console.log(indx);
}

// Searching key
let indx = arr.indexOf("Hell");
console.log("Index",indx);