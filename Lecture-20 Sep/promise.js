function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data fetched");
            resolve();
        }, 1000);
    });
}

function processData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data processed");
            resolve();
        }, 1000);
    });
}

function saveData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data saved");
            resolve();
        }, 1000);
    });
}

// Using Promises
fetchData()
    .then(processData)
    .then(saveData)
    .then(() => {
        console.log("All operations completed");
    });