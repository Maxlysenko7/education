const getCookingTime = require('../getCoockingTime');

describe('getCooingTime', () => {
    test('eggsAmount >= 1 && eggsAmount <= 5' , () => {
       expect(getCookingTime(1)).toEqual(5);
    })
    test('eggsAmount > 5 && eggsAmount <= 10', () => {
        expect(getCookingTime(8)).toEqual(10);
    })
    test('eggsAmount > 5 && eggsAmount <= 10', () => {
        expect(getCookingTime(10)).toEqual(10);
    })
    test('eggsAmount < 1', () => {
        expect(getCookingTime(0)).toEqual(0);
    })
    test('eggsAmount > 10', () => {
        expect(getCookingTime(12)).toEqual('Not possible');
    })
    test('eggsAmount > 10', () => {
        expect(getCookingTime(20)).toEqual('Not possible');
    })
})