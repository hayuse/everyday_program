import { Hono } from "hono";

const app = new Hono();

app.get("/", (c: any) => {
  return c.text('https://projecteuler.net/ の問題を解こう！');
});

app.get("/day1", (c: any) => {
  const targetArray = [];
  let answer = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0) {
      targetArray.push(i);
      continue;
    }
    if (i % 5 === 0) {
      targetArray.push(i);
      continue;
    }
  }
  for (const value of targetArray) {
    answer += value;
  }
  return c.text(answer);
});

app.get("/day2", (c: any) => {
  const getFebonacciArray = (init: number) => {
    let value = init;
    let oldValue = init;
    const febonacchiArray = [init];
    while (value <= 4000000) {
      const febonacci = value + oldValue;
      febonacchiArray.push(febonacci);
      oldValue = value;
      value = febonacci;
    }
    return febonacchiArray;
  };

  const evenSum = (array: Array<number>) => {
    let sumValue = 0;
    for (const value of array) {
      if (value % 2 === 0) {
        sumValue += value;
      }
    }
    return sumValue;
  };
  const array = getFebonacciArray(1);
  const answer = evenSum(array);

  return c.text(answer);
});

Deno.serve(app.fetch);
