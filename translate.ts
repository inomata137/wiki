import fs from 'fs'
import rewrite from './rewriter'

const text = fs.readFileSync("./sample.md", 'utf8').toString()
if (!fs.existsSync('./output')) {
  fs.mkdirSync('./output')
}
fs.writeFileSync('./output/output.txt', rewrite(text))