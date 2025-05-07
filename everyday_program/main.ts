import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c: any) => {
  const targetArray = [];
  let answer = 0;
  for(let i = 0; i < 1000; i++) {
    if (i % 3 === 0) {
      targetArray.push(i);
    }
    if (i % 5 === 0) {
      targetArray.push(i);
    }
  }
  for (const value of targetArray) {
    answer += value;
  }
  return c.text(answer);
})

Deno.serve(app.fetch)
