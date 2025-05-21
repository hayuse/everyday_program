import { Hono } from 'hono'
import root from './routes/index.ts'
import day1 from './routes/day1.ts'
import day2 from './routes/day2.ts'
import day3 from './routes/day3.ts'
import day4 from './routes/day4.ts'
import day5 from './routes/day5.ts'
import day6 from './routes/day6.ts'
import day7 from './routes/day7.ts'
import day8 from './routes/day8.ts'
import day9 from './routes/day9.ts'
import day10 from './routes/day10.ts'
import day11 from './routes/day11.ts'

const app = new Hono()

app.route('/', root)
app.route('/day1', day1)
app.route('/day2', day2)
app.route('/day3', day3)
app.route('/day4', day4)
app.route('/day5', day5)
app.route('/day6', day6)
app.route('/day7', day7)
app.route('/day8', day8)
app.route('/day9', day9)
app.route('/day10', day10)
app.route('/day11', day11)

Deno.serve(app.fetch);