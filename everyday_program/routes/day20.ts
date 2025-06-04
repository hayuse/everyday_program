import { Hono } from "hono";

const day20 = new Hono();

day20.get("/", (c: any) => {
  const main = (init: bigint) => {
    let tmp = 1n;
    for(let i = 0n; i < init; i++) {
      tmp = tmp * (init - i)
    }
    console.log(tmp);
    let sum = 0;
    for (const num of tmp.toString()) {
      sum += Number(num);
    }
    return sum;
  };
  return c.text(main(100n));
});

export default day20;
