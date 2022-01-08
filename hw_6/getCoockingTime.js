function getCoockingTime(eggsAmount){
    let result;
    const time = 5;
    
    if(eggsAmount >= 1 && eggsAmount <= 5) {
        result = time;

    } else if(eggsAmount > 5 && eggsAmount <= 10) {
        result = time*2;

    } else if(eggsAmount < 1) {
        result = 0;
    } else if(eggsAmount > 10){
        result = 'Not possible'

    } return result;

}
console.log(getCoockingTime(7))
console.log(getCoockingTime(0));
console.log(getCoockingTime(5));
console.log(getCoockingTime(9));

module.exports = getCoockingTime;

