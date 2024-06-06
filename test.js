const arr1 = [1, 2, 3, 4, 5]
const arr2 = ['a', 'b', 'c', 'd', 'e']
const arr3 = []

for (const [el1, el2] of [arr1, arr2]) {
    arr3.push({el1, el2})
}

console.log(arr3)