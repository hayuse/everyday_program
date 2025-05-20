import { Hono } from "hono";

const day9 = new Hono();

day9.get("/", (c: any) => {
  const check = (a: number, b: number, c: number) => {
    if (a * a + b * b === c * c) {
      return true;
    }
  };
  const main = (init: number) => {
    let a = 0;
    let b = 0;
    let c = 0;
    for (let i = 1; i <= init; i++) {
      a = i;
      for (let j = 1; j <= init; j++) {
        b = i + j;
        c = init - a - b;
        if (check(a, b, c)) return a * b * c;
      }
    }
  };
  return c.text(main(1000));
});

export default day9;
