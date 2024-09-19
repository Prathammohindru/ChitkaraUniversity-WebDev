const timeoutId = setTimeout(() => {
    console.log("This will not run");

}, 2000);

clearTimeout(timeoutId);
console.log("TimeOut Cancelled");