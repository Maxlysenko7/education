const getNumber = require('../getNumber');

describe('getNumberOdd', () => {
    test('find 13', () => {
        expect(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])).toEqual([13]);
    })
    test('find 15, 13', () => {
        expect(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12, 15])).toEqual([13,15]);
    })
    test('isArray', () => {
        expect(getNumber('askdjfghkl')).toEqual(false);
    })
    test('empty arr', () => {
        expect(getNumber([2,4,8,12,16,24])).toEqual([]);
    })
})