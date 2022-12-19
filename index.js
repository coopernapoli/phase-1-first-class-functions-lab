const returnFirstTwoDrivers = drivers => {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = drivers => {
    return drivers.slice(2,4)
}

const selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers])

function createFareMultiplier (multiplier) { 

    return function (fare) {
        return fare * multiplier;
    };

}

const fareDoubler = fare => {
    const multiplier = 2;
    return fare * multiplier;
};

const fareTripler = fare => {
    const multiplier = 3;
    return fare * multiplier;
};

const arrayOfDrivers = ["Antonia", 'Nuru', 'Amari', 'Mo']
const driverFunctions= [returnFirstTwoDrivers, returnLastTwoDrivers]

function selectDifferentDrivers(arrayOfDrivers, driverFunctions) {
return driverFunctions(arrayOfDrivers)
}