import { Hono } from 'hono'

const day4 = new Hono()

day4.get("/", (c: any) => {
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

export default day4;