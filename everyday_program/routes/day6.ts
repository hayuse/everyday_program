import { Hono } from 'hono'

const day6 = new Hono()

day6.get("/", (c: any) => {
    const main = (init: number) => {
      let squareSum = 0;
      let squareSum2 = 0;
      for (let i = 1; i <= init; i ++) {
        squareSum += i * i;
      }
      for (let i = 1; i <= init; i ++) {
        squareSum2 += i;
      }
      const answer = (squareSum2 * squareSum2) - squareSum;
      return answer;
    }
    return c.text(main(100));
  });

export default day6;