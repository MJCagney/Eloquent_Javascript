let arrays = [[2,3,4,5],[7,8,9,10],[1,6]];

console.log(arrays.reduce((a, b) => a.concat(b), []));