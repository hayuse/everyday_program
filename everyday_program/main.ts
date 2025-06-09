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
import day12 from './routes/day12.ts'
import day13 from './routes/day13.ts'
import day14 from './routes/day14.ts'
import day15 from './routes/day15.ts'
import day16 from './routes/day16.ts'
import day17 from './routes/day17.ts'
import day18 from './routes/day18.ts'
import day19 from './routes/day19.ts'
import day20 from './routes/day20.ts'
import day21 from './routes/day21.ts'
import day22 from './routes/day22.ts'
import day23 from './routes/day23.ts'

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
app.route('/day12', day12)
app.route('/day13', day13)
app.route('/day14', day14)
app.route('/day15', day15)
app.route('/day16', day16)
app.route('/day17', day17)
app.route('/day18', day18)
app.route('/day19', day19)
app.route('/day20', day20)
app.route('/day21', day21)
app.route('/day22', day22)
app.route('/day23', day23)

Deno.serve(app.fetch); 