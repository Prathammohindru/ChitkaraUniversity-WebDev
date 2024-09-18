//  1. SCOPE MEIN DIFFERENCE HAI IN VAR AND LET
if(true){
    var x=1;
    let y=2;
}
console.log(x);//1
console.log(y);//UNDEFINED

//  2.HOISTING DIFFERENCE IN VAR AND LET

console.log(a);// Undefined due to hoisting with var
var a=5;

console.log(b);// Reference Error: Can not access b before intialization
let b=5;



//  3. REDECLARTION DIFFERENCE IN VAR AND LET
 var c=10;
 var c=20;// c will be redclared

 let d=10;
 let d =20;// d will give syantax error: already declared


 // 4. GLOBAL OBJECT PROPERTY

 var e=30;
 console.log(window.e)//30 (with global object property)

 let f=30;
 console.log(window.f)//undefined(not a gloabl object property)

 