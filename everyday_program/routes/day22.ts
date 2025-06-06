import { Hono } from "hono";

const day22 = new Hono();

day22.get("/", async(c: any) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const loopVoid = (array: Array<string>) => {
    let answer = 0
    array.forEach((value, index) =>{
      let score = 0;
      // 各アルファベットごとの順番をスコアに反映
      for(let i = 0; i < value.length; i ++) {
        const charScore = alphabet.indexOf(value[i]);
        score += charScore + 1;
      }
      // 配列のindex + 1(何番目か)　* 各アルファベットの合計スコア
      answer += (score * (index + 1));
    });
    return answer;
  }
  const main = async () => {
    try {
      // テキストファイルの読み込みと配列化
      const content = await Deno.readTextFile('./files/Names_Scores_22.txt');
      const nameArray = content.split(',').map((s) => s.trim().replace(/^"|"$/g, ''));
      return loopVoid(nameArray.sort());
    } catch (e) {
      return 'ファイル読み込み失敗: ' + e.message, 500;
    }
  };
  return c.text(await main());
});

export default day22;
