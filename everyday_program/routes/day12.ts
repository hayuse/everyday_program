import { Hono } from "hono";

const day12 = new Hono();

day12.get("/", (c: any) => {
  const check = (number: number, init: number) => {
    const divisors: number[] = [];
    for (let i = 1; i < number; i ++) {
      if (divisors.includes(i)) break;
      if (number % i === 0) {
        divisors.push(i);
        divisors.push(number / i);
      }
    }
    if (divisors.length > init) return false;
    return true;
  }
  const main = (init: number) => {
    let answer = 1;
    let addNum = 2;
    while(check(answer, init)) {
      answer = answer + addNum;
      addNum++;
    }
    return answer;
  };
  return c.text(main(500));
});

export default day12;
