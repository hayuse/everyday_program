import { Hono } from 'hono'

const day3 = new Hono()

day3.get("/", (c: any) => {
    const getPrimeFactor = (init: number) => {
      let disNum = init;
      const primeFactorArray = [];
      for (let value = 2; value * value <= disNum; value ++) {
        while (disNum % value === 0) {
          primeFactorArray.push(value);
          disNum = disNum / value;
        }
      }
      if (disNum > 1) primeFactorArray.push(disNum);
      return primeFactorArray;
    };
  
    const array = getPrimeFactor(600851475143);
    console.log(array);
    return c.text(array[array.length - 1]);
  });

export default day3;