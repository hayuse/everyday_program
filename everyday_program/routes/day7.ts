import { Hono } from 'hono'

const day7 = new Hono()

day7.get("/", (c: any) => {
    let count = 0;
    // 比較する数値(value)と素数の配列から、valueが素数かを判定
    const primeCheck = (value: number, primeArray: Array<number>) => {
      for (const prime of primeArray) {
        count ++;
        if ((value === prime) || (value % prime === 0)) return false;
        if ((prime * prime) > value) return true;
      }
      return true;
    };

    // init番目の素数を計算する
    const main = (init: number) => {
      const primeArray: Array<number> = [2];
      let value = 2;
      while(primeArray.length < init) {
        if (primeCheck(value, primeArray)) {
          primeArray.push(value);
        }
        value ++;
      }
      console.log(count);
      return primeArray[init - 1];
    }
    return c.text(main(10001));
  });

export default day7;