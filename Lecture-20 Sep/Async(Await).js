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

async function handleData() {
    await fetchData();
    await processData();
    await saveData();
    console.log("All operations completed");
}

// Call the async function
handleData();