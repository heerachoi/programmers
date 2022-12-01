function solution(sizes) {
    var [row, col] = sizes.reduce(([x,y],[r,c]) => [Math.max(Math.max(r,c),x), Math.max(Math.min(r,c), y)],[0,0]);
    return row*col;
}