import { Hono } from "hono";

const day19 = new Hono();

day19.get("/", (c: any) => {
  const main = (init: number) => {
    let year = init;
    const monthData = {
      "1" : 31,
      "2" : 28,
      "3" : 31,
      "4" : 30,
      "5" : 31,
      "6" : 30,
      "7" : 31,
      "8" : 31,
      "9" : 30,
      "10": 31,
      "11": 30,
      "12": 31,
    }
    const dayData = {
      "1" : "Mon",
      "2" : "Tue",
      "3" : "Wed",
      "4" : "Thir",
      "5" : "Fri",
      "6" : "Sat",
      "7" : "Sun",
    }
    // 1900年1月は月曜日なので初期値を1に設定
    let dayIndex = 1;
    let answer = 0;

    while(year <= 2000) {
      // うるどし判定
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log(year);
        monthData["2"] = 29;
      } else {
        monthData["2"] = 28;
      }

      // 月毎に何曜日で始まるかチェック
      for(let i = 1; i <= 12; i ++) {
        // 日曜日で始まる日をカウント
        if (dayData[dayIndex] === "Sun" && year > 1900) answer++;
        dayIndex += monthData[i] % 7;
        if (dayIndex > 7) {
          dayIndex = dayIndex % 7;
        }
      }
      year ++;
    }
    return answer;
  };
  return c.text(main(1900));
});

export default day19;
