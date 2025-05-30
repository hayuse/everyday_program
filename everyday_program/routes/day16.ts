import { Hono } from "hono";

const day16 = new Hono();

day16.get("/", (c: any) => {
  const main = (init: number) => {
    let answer = 1n;
    for (let i = 0; i < init; i++) {
      answer = BigInt(2n * answer);
    }
    const stirngAnswer = answer.toString();
    let sumAnswer = 0
    for (let i = 0; i < stirngAnswer.length; i ++) {
      sumAnswer += Number(stirngAnswer[i]);
    }
    return sumAnswer;
  }
  return c.text(main(1000));
});

export default day16;
