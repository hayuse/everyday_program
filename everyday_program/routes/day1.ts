import { Hono } from 'hono'

const day1 = new Hono()

day1.get("/", (c: any) => {
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

export default day1;