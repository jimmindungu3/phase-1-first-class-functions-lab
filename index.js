const returnFirstTwoDrivers = function(arrayOfDrivers) {
    return arrayOfDrivers.slice(0, 2);
}


const returnLastTwoDrivers = function(arrayOfDrivers){
    return arrayOfDrivers.slice(-2);
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function(multiplier) {
    return function(distance) {
        return distance * multiplier;
    }
}


const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);


const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
  }