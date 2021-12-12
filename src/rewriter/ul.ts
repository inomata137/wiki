export default function (str: string) {
  return str.replace(/^ {4}\-/mg, '---').replace(/^ {2}\-/mg, '--')
}
