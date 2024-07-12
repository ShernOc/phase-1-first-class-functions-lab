// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers  = function (drivers){
return [drivers[0], drivers[1]];
}
returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers = function(drivers){
return [drivers[2], drivers[3]]
}
returnLastTwoDrivers(drivers);

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function(multiplier){
return function(fare){
  return multiplier*fare
};
}

createFareMultiplier(); 

const fareDoubler = createFareMultiplier(2);
const fareTripler= createFareMultiplier(3);
 

function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
   return returnFirstTwoDrivers(drivers);
}

selectDifferentDrivers();






