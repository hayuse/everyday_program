import { Hono } from "hono";

const app = new Hono();

app.get("/", (c: any) => {
  return c.text('https://projecteuler.net/ の問題を解こう！');
});

app.get("/day1", (c: any) => {
  const targetArray = [];
  let answer = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0) {
      targetArray.push(i);
      continue;
    }
    if (i % 5 === 0) {
      targetArray.push(i);
      continue;
    }
  }
  for (const value of targetArray) {
    answer += value;
  }
  return c.text(answer);
});

app.get("/day2", (c: any) => {
  const getFebonacciArray = (init: number) => {
    let value = init;
    let oldValue = init;
    const febonacchiArray = [init];
    while (value <= 4000000) {
      const febonacci = value + oldValue;
      febonacchiArray.push(febonacci);
      oldValue = value;
      value = febonacci;
    }
    return febonacchiArray;
  };

  const evenSum = (array: Array<number>) => {
    let sumValue = 0;
    for (const value of array) {
      if (value % 2 === 0) {
        sumValue += value;
      }
    }
    return sumValue;
  };
  const array = getFebonacciArray(1);
  const answer = evenSum(array);

  return c.text(answer);
});

app.get("/day3", (c: any) => {
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

app.get("/day4", (c: any) => {
  const checkPalindrome = (number: number) => {
    const numberString = number.toString();
    const stringLength = numberString.length;
    if (stringLength % 2 === 0) {
      for (let i = 0; i < stringLength / 2; i ++) {
        if (numberString[(stringLength / 2) + i] !== numberString[(stringLength / 2) - i - 1]) return false;
      }
      return true;
    } else {
      for (let i = 1; i <= Math.floor(stringLength/ 2); i ++) {
        if (numberString[(Math.floor(stringLength/ 2)) + i] !== numberString[(Math.floor(stringLength/ 2)) - i]) return false;
      }
      return true;
    }
  };
 
  const main = (digit: number) => {
    let initNum = 1;
    let maxPalindrome = 0;
    for (let i = 0; i < digit; i ++) {
      initNum = initNum * 10;
    }

    let firstValue = initNum - 1;
    let secondValue = initNum - 1;
    for (let i = 1; i < initNum; i++) {
      firstValue = initNum - i;
      for (let i = 1; i < initNum; i++) {
        secondValue = initNum - i;
        const tmpValue = firstValue * secondValue;
        if (checkPalindrome(tmpValue) && tmpValue > maxPalindrome) {
          maxPalindrome = tmpValue; // Update maxPalindrome if a larger palindrome is found
        }
      }
    }
    return maxPalindrome; // Return the maximum palindrome directly
  }
  const answer = main(3);
  return c.text(answer);
});

app.get("/day5", (c: any) => {
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

Deno.serve(app.fetch);