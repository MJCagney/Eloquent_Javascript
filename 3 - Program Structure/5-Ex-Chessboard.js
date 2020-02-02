let size = 10;
let grid = "";
for (let row = 1; row <= size; row += 1) {
    for (let n = 1; n <= size; n += 1) {
        if ((row + n) % 2 == 0)
            grid += " ";
        else 
            grid += "#";
    }
    grid += "\n";
}

console.log(grid);
