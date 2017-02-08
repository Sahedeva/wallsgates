console.log('hi');
let grid = [[5,-1,0,5],[5,5,5,-1],[5,-1,5,-1],[0,-1,5,5]];
console.log(grid);
console.log(grid[0][0]);
console.log(grid[0][1]);
let gateCoords = {};
let gateNum = 0;
for (let i=0;i<4;i++){
  if(grid[i].indexOf(0)>-1){
    gateNum++
    console.log('we have a gate')
    console.log(`position is at ${i},${grid[i].indexOf(0)}`);
    gateCoords[gateNum]=[i,grid[i].indexOf(0)];

  }
}
console.log(`gateCoords: ${JSON.stringify(gateCoords)}`);
// find gates - put each gate in a queue - keep track of iterations
// in this example - 2 gates so 2 queues
let finished = false;
let iteration = 0;
while (finished == false){
  iteration++
  console.log(`gate iteration #${iteration}`);
  console.log(`number of gate queues: ${gateNum}`);
  for (let gate in gateCoords) {
    console.log(`gate #${gate}`);
    console.log(`coords:${gateCoords[gate]}`);
    console.log(`x:${gateCoords[gate][0]}`);
    console.log(`y:${gateCoords[gate][1]}`);
    // check neighbors
    // above (x-1, y)
    if (gateCoords[gate][0]<1){
      //at edge - no action
      console.log("can't go up");
    } else {
      //check if empty room then put in iteration num o/w do nothing
      let testval = grid[gateCoords[gate][0]-1][gateCoords[gate][1]];
      if (testval==5) {
        console.log("up is empty room - replace with iteration num");
        grid[gateCoords[gate][0]-1][gateCoords[gate][1]]=iteration;
      } else {
        console.log("up is not empty room - no action");
      }
    }
    // left (x,y-1)
    if (gateCoords[gate][1]<1){
      //at edge - no action
      console.log("can't go left");
    } else {
      //check if empty room then put in iteration num o/w do nothing
      let testval = grid[gateCoords[gate][0]][gateCoords[gate][1]-1];
      if (testval==5) {
        console.log("left is empty room - replace with iteration num");
        grid[gateCoords[gate][0]][gateCoords[gate][1]-1]=iteration;
      } else {
        console.log("left is not empty room - no action");
      }
    }
    // right (x, y+1)
    if (gateCoords[gate][1]>2){
      //at edge - no action
      console.log("can't go right");
    } else {
      //check if empty room then put in iteration num o/w do nothing
      let testval = grid[gateCoords[gate][0]][gateCoords[gate][1]+1];
      if (testval==5) {
        console.log("right is empty room - replace with iteration num");
        grid[gateCoords[gate][0]][gateCoords[gate][1]+1]=iteration;
      } else {
        console.log("right is not empty room - no action");
      }
    }
    // below (x+1,y)
    if (gateCoords[gate][0]>2){
      //at edge - no action
      console.log("can't go down");
    } else {
      //check if empty room then put in iteration num o/w do nothing
      let testval = grid[gateCoords[gate][0]+1][gateCoords[gate][1]];
      if (testval==5) {
        console.log("down is empty room - replace with iteration num");
        grid[gateCoords[gate][0]+1][gateCoords[gate][1]]=iteration;
      } else {
        console.log("down is not empty room - no action");
      }
    }
    if(gate==2){
      finished = true;
    }
  }


}
console.log('done');
console.log(`grid: ${grid}`);
