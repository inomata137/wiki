export default function (str: string) {
  const regex = /(?<=<dl>\n( {2}<dt>.+<\/dt>\n {2}<dd>.+<\/dd>\n)*) {2}<dt>.+<\/dt>\n {2}<dd>.+<\/dd>(?=(\s|\S)*\n<\/dl>)/mg
  return str.replace(regex, (match) => {
    return match.replace(/(?<=<dt>)(.+)(?=<\/dt>)/, ':$1').replace(/(?<=<dd>)(.+)(?=<\/dd>)/, '|$1').replace(/(\n|<\/?d(t|d)>| {2})/mg, '')
  }).replace(/<\/?dl>\n/mg, '')
}
