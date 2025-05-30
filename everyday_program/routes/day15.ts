import { Hono } from "hono";

const day15 = new Hono();

day15.get("/", (c: any) => {
  let answer: number | null = null;
  const main = (init: number) => {
    const rowArray = new Array(init).fill(0);
    const squareArea = new Array(init).fill(rowArray);
    const testArray: number[][] = [];
    let routes = 1;
    testArray.push(squareArea);
    let i = 0;
    while (rowArray[(init - 2)] < init) {
      routes ++;
      if (rowArray[i] <= init) rowArray[i] ++;
      if (rowArray[i] > init) {
        for (let j = 0; j < init; j ++) {
          if(rowArray[j] < init ) {
            rowArray[j] ++;
            for (let u = 0; u < j; u ++) {
              rowArray[u] = rowArray[j];
            }
            break;
          }
        }
      }
    }
    console.log(routes * 2, rowArray);
    answer = routes * 2;
    return routes * 2;
  };
  if (answer === null) {
    answer = main(20);
    return c.text(answer);
  } else {
    return c.text(answer);
  }
});

export default day15;
