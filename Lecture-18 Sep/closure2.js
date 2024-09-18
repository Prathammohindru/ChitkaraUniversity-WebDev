function OuterFun(){
    let outervar="Outer";

    function InnerFun(){
        console.log(outervar);//Access outer variable
    }
    return InnerFun;//Returns Inner Function
}

const closurefunction = OuterFun()//executes outer function
closurefunction();