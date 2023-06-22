const localStorage = require("local-storage");

const setData = async (name, saveData) => {
  localStorage.set(name, saveData);
  console.log(`${saveData} is saved successfully`);
};

const getData = async (name) => {
  const retrievedValue = localStorage.get(name);
  if (!retrievedValue) return "value not found";
  return retrievedValue;
};

const addressPadding = async (accountId) => {
  let accountIdArray = accountId.split(".");
  let lastNumber = accountIdArray[accountIdArray.length - 1];
  let currentPad = Number(lastNumber.toString()).toString(16);
  let actualPadding = currentPad.padStart(40, "0");
  let actualAddress = "0x" + actualPadding;
  return actualAddress;
};

module.exports = {
  setData,
  getData,
  addressPadding,
};
