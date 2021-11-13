/*
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference 

Find the Symmetric Difference

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

*/

function sym(...args) {
    const dict = {};
    const result = [];
    args.forEach(arg => {
        const argset = new Set(arg);
        argset.forEach(item => {
            if (!(item in dict)) {
                dict[item] = 1;
            } else {
                dict[item] += 1;
            }
        });
    });
    // console.log(dict);
    Object.keys(dict).forEach(item => {
        if (dict[item] % 2 !== 0) {
            // item is str, convert to number
            result.push(Number(item));
        }
    })
    // console.log(result);
    return result;
}

module.exports = sym;

// sym([1, 2, 3], [5, 2, 1, 4]);