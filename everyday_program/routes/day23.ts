import { Hono } from "hono";

const day23 = new Hono();

day23.get("/", (c: any) => {
  const aboundantArray: Array<number> = [];
  const checkAbundantNumbers = (number: number) => {
    const divisorsArray: Array<number> = [];
    for (let i = 0; i < number; i++) {
      if (number % i === 0) {
        if (divisorsArray.includes(i)) break;
        divisorsArray.push(i);
        if (i !== 1 && !divisorsArray.includes(number / i))
          divisorsArray.push(number / i);
      }
    }
    let divisorsSum = 0;
    for (const value of divisorsArray) {
      divisorsSum += value;
    }
    if (divisorsSum > number) aboundantArray.push(number);
  };

  const main = () => {
    let answer = 0;
    const answerArray = [];
    for (let i = 1; i <= 28123; i++) {
      checkAbundantNumbers(i);
    }
    for (let i = 1; i <= 28123; i++) {
      if (i < 24) {
        answer += i;
        answerArray.push(i);
        continue;
      }
      let flag = false;
      for (const aboundant of aboundantArray) {
        if (i - aboundant < 0) break;
        if (aboundantArray.includes(i - aboundant)) {
          flag = true;
          break;
        }
        flag = false;
      }
      if (flag === false) {
        answer += i
        answerArray.push(i);
      }
    }
    console.log(aboundantArray, answer, answerArray);
    return answer;
  };
  return c.text(main());
});

export default day23;
