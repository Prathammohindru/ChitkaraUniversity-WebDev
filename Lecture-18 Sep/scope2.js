// GLOBAL SCOPE OF A VARIABLE
let globalvar="Global";
function test(){
    console.log(globalvar)
}

//FUNCTION SCOPE OF A VARIABLE
function myfun(){
    let localvar="Local";
    console.log(localvar)
}
console.log(localvar)


//BLOCK SCOPE OF A VARIABLE
if (true){
    let blockvar="Block"
    console.log(blockvar)
}
console.log(blockvar)
