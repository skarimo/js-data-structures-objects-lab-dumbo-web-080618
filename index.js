const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  let newDriver = Object.assign({}, driver, {[key]: value})
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  let newDriver = {...driver}
   delete newDriver[key]
   return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
   delete driver[key]
   return driver
}
