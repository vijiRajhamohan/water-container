

// var trap = function (height) {
//     if (!height.length) return 0;

//     let sum = 0;
//     let wallHeight = 0;
//     let maxHeight = height[0];
//     let heightIndex = 0;

//     for (let i = 1; i < height.length; i++) {
//         if (height[i] > maxHeight) {
//             heightIndex = i;
//             // wallHeight=height[i];
//             maxHeight = height[i];
//         }

//     }

//     for (let i = 0; i < heightIndex; i++) {
//         if (height[i] > wallHeight) {
//             wallHeight = height[i];
//         }else{
//             sum += wallHeight-height[i];

//         }

//     }

//     for (let i=height.length-1; i >= 0; i--) {
//         if (height[i] > wallHeight) {
//             wallHeight = height[i];
//         }else{
//             sum += wallHeight-height[i];

//         }


//     }
//     return sum;
// }


var trap = function (height) {
    const maxLeft = [];
    const maxRight = [];

    let max = 0
    for (let i = 0; i < height.length; i++) {
        max = Math.max(height[i], max)
        maxLeft[i] = max
    }

    max = 0
    for (let i = height.length - 1; i > -1; i--) {
        max = Math.max(height[i], max)
        maxRight[i] = max
    }

    let maxWater = 0
    for (let i = 0; i < height.length; i++) {
        const boundary = Math.min(maxLeft[i], maxRight[i])
        maxWater += boundary - height[i]
    }

    return maxWater
};
console.log(trap([0, 4, 0, 0, 0, 6, 0, 6, 4, 0]));