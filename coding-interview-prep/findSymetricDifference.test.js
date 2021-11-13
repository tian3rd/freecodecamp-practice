const findSymetricDifference = require('./findSymetricDifference');
// import findSymetricDifference from './findSymetricDifference';

test('Test symetric differences between two same arrays', () => {
    expect(findSymetricDifference([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toStrictEqual([]);
})

test('Test symetric differences between two different arrays', () => {
    expect(findSymetricDifference([1, 2, 3, 4, 5], [1, 2, 3, 4, 6])).toStrictEqual([5, 6]);
})

test('Test symetric differences among three arrays', () => {
    expect(findSymetricDifference([1, 2, 3, 4, 5], [1, 2, 3, 4, 6], [1, 2, 3, 4, 7])).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
})
