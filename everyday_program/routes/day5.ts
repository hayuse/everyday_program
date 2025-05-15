import { Hono } from 'hono'

const day5 = new Hono()

day5.get("/", (c: any) => {
    const check = (number: number, init: number)=> {
      for (let i=1; i <= init; i++) {
        if (number % i !== 0) return false;
      }
      return true;
    }
  
    const main = (init: number) => {
      let number = 1;
      while (!check(number, init)) {
        number++;
      }
      return number;
    }
    return c.text(main(20));
  });

export default day5;