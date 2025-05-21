import { Hono } from "hono";

const day10 = new Hono();

day10.get("/", (c: any) => {
  const checkPrime = (num: number, primeArray: Array<number>) => {
    for(const prime of primeArray) {
      if(num % prime === 0) return false;
      if(prime * prime > num) return true;
    }
    return true;
  };
  const main = (init: number) => {
    const primeArray = [2];
    let answer = 0;
    for(let i = 2; i < init; i++) {
      if (checkPrime(i, primeArray)) primeArray.push(i);
    }
    for(const prime of primeArray) {
      answer += prime;
    }
    console.log(primeArray);
    return answer;
  };
  return c.text(main(2000000));
});

export default day10;
