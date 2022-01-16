const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// function addBatt (lst) {
//     tot = 0;
//     for (batt of lst) {
//         tot+=batt;
//     }
//     return tot;
// }

// function addBattery (tot,lst) {
//     return tot+=lst;
// }

const addBattery = (num1,num2) => {
    return num1+=num2;
}

const totalBatteries = batteryBatches.reduce(addBattery,0);
// const totalBatteries = batteryBatches.reduce((tot,lst) => {return tot+=lst;},0);