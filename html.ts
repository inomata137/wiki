import mdit from 'markdown-it'
import fs from 'fs'
const md = mdit()
const text = fs.readFileSync('./sample.md', 'utf-8').toString()
const result = md.render(text)
if (!fs.existsSync('./output')) {
  fs.mkdirSync('./output')
}
fs.writeFileSync('./output/output.html', result)
