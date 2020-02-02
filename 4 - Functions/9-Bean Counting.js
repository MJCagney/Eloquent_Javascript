//console.log("hello"[1]);

function countBsOld(value) {
    let count = 0;
    for (let n = 0; n < value.length; n++) {
        //console.log(`Position ${n} = ${value[n]}`);
        if (value[n] === 'B')
            count++;
    }
    return count;
}

function countChar(value, character) {
    let count = 0;
    for (let n = 0; n < value.length; n++) {
        //console.log(`Position ${n} = ${value[n]}`);
        if (value[n] === character)
            count++;
    }
    return count;
}

function countBs(value) {
    return countChar(value, 'B');
}

console.log(countBs("hello"));
console.log(countBs("you belong to me Beth"));

