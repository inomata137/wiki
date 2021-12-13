export default function (str: string) {
  return str.replace(/^ {5}([0-9]*\.)/mg, '+++').replace(/^ {2}([0-9]*\.)/mg, '++').replace(/^[0-9]\./mg, '+')
}
