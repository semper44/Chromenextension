const localStorage = require('local-storage');

const setData = async (name , saveData) => {
    
    localStorage.set(name, saveData);
    console.log(`${saveData} is saved successfully`);
}

const getData = async (name) => {
    const retrievedValue = localStorage.get(name);
    if (!retrievedValue) return ("value not found");
    return retrievedValue;
}


module.exports = {
    setData,
    getData
}