import { Hono } from 'hono'

const root = new Hono()

root.get("/", (c: any) => {
    return c.text('https://projecteuler.net/ の問題を解こう！');
});

export default root