export default function (str: string) {
  return str.replace(/`{3}\n(.+\n)+`{3}\n/mg, (match) => {
    return match.replace(/\n(\W)/mg, '\n $1').replace(/`{3}\n/mg, '')
  })
}