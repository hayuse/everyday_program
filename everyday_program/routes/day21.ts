import { Hono } from "hono";

const day21 = new Hono();

day21.get("/", (c: any) => {
  // 約数を求めて、約数全てを合計した数を返す
  const getDivisors = (number: number) => {
    const divisorsArray: Array<number> = [1];
    // その数以外の約数を配列に格納
    for (let i = 2; i < number; i++) {
      if (divisorsArray.includes(i)) break;
      if (number % i === 0) {
        divisorsArray.push(i)
        if (!divisorsArray.includes(number / i)) divisorsArray.push(number / i);
      }
    }
    let sum = 0;
    // 約数全てを合計
    for (const value of divisorsArray) {
      sum += value;
    }
    return sum
  }

  const main = (init: number) => {
    let answer = 0;
    const amicableArray: Array<number> = [];
    for (let i = 1; i <= init; i++) {
      // 約数の合計とその合計の約数の合計を出す。
      const currentDivisorSum = getDivisors(i);
      const divisorSum = getDivisors(currentDivisorSum);

      // divisorSumが、iと同じかつ、友愛数としてすでに登録されていないかつ、約数の合計数と自身が同じでないものを合計
      if (i === divisorSum && !amicableArray.includes(i) && currentDivisorSum !== divisorSum) {
        amicableArray.push(divisorSum);
        amicableArray.push(currentDivisorSum);
      }
    }
    for (const value of amicableArray) {
      answer += value;
    }
    return answer;
  };
  return c.text(main(10000));
});

export default day21;
