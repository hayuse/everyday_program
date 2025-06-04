import { Hono } from "hono";

const day18 = new Hono();

day18.get("/", (c: any) => {

  // 配列から最大値を抽出して返す
  const getMaxValue = (number: Array<string>) => {
    let maxNum = 0;
    for (const num of number) {
      if (maxNum < Number(num)) maxNum = Number(num);
    }
    return maxNum;
  }
  const main = (init: Array<string>) => {
    const triangleArray = [];
    // ２次元配列に形成
    for (const row of init) {
      triangleArray.push(row.split(" "));
    }

    // 最大行数までループ
    for (let i = 0; i < triangleArray.length - 1; i ++) {
      for (let j = 0; j < triangleArray[i + 1].length - 1 ; j ++) {

        // 隣のかずと比較して、大きい方が重複する配列の値に足される
        if (!triangleArray[i][j - 1] || triangleArray[i][j] > triangleArray[i][j - 1]){
          triangleArray[i + 1][j] = (Number(triangleArray[i][j]) + Number(triangleArray[i + 1][j] ?? 0)).toString();
        }
        if (!triangleArray[i][j + 1] || triangleArray[i][j] > triangleArray[i][j + 1]){
          triangleArray[i + 1][j + 1] = (Number(triangleArray[i][j]) + Number(triangleArray[i + 1][j + 1] ?? 0)).toString();
        }
      }
    }
    return getMaxValue(triangleArray[triangleArray.length - 1]);
  };
  const init = `75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`.split('\n');
  return c.text(main(init));
});

export default day18;
