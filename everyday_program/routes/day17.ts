import { Hono } from "hono";

const day15 = new Hono();

day15.get("/", (c: any) => {
  const main = (init: number) => {
    const numberData = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
      20: "twenty",
      30: "thirty",
      40: "forty", // fourtyだとずっと思ってた💢
      50: "fifty",
      60: "sixty",
      70: "seventy",
      80: "eighty",
      90: "ninety",
    };
    let answer = "";
    for (let i: number = 1; i <= init; i++) {
      const thousand = Math.floor(i / 1000);
      if (thousand > 0) answer += numberData[thousand] + "thousand";
      const thousandRemainder = i % 1000;
      const hundred = Math.floor(thousandRemainder / 100);
      if (hundred > 0) answer += numberData[hundred] + "hundred";
      const hundredRemainder = i % 100;
      if (hundred > 0 && hundredRemainder !== 0) answer += "and";
      const ty = Math.floor(hundredRemainder / 10);
      const tyRemainder = i % 10;
      if (ty === 1) {
        answer += numberData[ty * 10 + tyRemainder];
      }
      if (ty > 1) {
        answer += numberData[ty * 10];
      }
      if (tyRemainder > 0 && ((ty * 10) + tyRemainder < 10 || (ty * 10) + tyRemainder >= 20)) {
        answer += numberData[tyRemainder];
      }
      // answer += ', ';
    }
    return answer.length;
  };
  return c.text(main(1000));
});

export default day15;
