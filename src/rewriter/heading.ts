export default function (str: string) {
  return str.replace(/^#*/mg, (match) => '*'.repeat(match.length))
}
