// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    let newArray = [drivers[0], drivers[1]]
    return newArray
}

const returnLastTwoDrivers = function(drivers) {
    let newArray = [(drivers[drivers.length - 2]), (drivers[drivers.length - 1])]
    // let newArray = (drivers[drivers.length - 1], drivers[drivers.length - 2])
    return newArray
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function(fare) {
        let cost = (integer * fare)
        return cost
    }
}

// const double = createFareMultiplier(2)

function fareDoubler(fare) {
    const double = createFareMultiplier(2)
    return (double(fare))
}

function fareTripler(fare) {
    const triple = createFareMultiplier(3)
    return (triple(fare))
}

function selectDifferentDrivers(array, returnFirstTwoDrivers) {
   return returnFirstTwoDrivers(array)
}



