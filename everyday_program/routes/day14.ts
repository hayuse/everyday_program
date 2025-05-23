import { Hono } from "hono";

const day14 = new Hono();

day14.get("/", (c: any) => {
  const main = (init: number) => {
    const answer = {
      answer: 0,
      length: 0,
    };
    let number = init;
    // 初期値から 初期値/2までループ
    while(number >= init / 2) {
      let tmpNumber = number;
      const tmpArray = [tmpNumber] 
      while (tmpNumber !== 1) {
        if(tmpNumber % 2 === 0) {
          tmpNumber = tmpNumber / 2;
          tmpArray.push(tmpNumber);
        } else {
          tmpNumber = (3 * tmpNumber) + 1
          tmpArray.push(tmpNumber);
        }
      }
      number --;
      // 連鎖の長さを比較し答えを上書き
      if (tmpArray.length > answer.length) {
        answer.length = tmpArray.length;
        answer.answer = tmpArray[0];
      }
    }
    return answer.answer;
  };
  return c.text(main(1000000));
});

export default day14;
