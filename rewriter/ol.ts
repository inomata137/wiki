export default function (str: string) {
  return str.replace(/^ {4}([0-9]*\.|\+)/mg, '+++').replace(/^ {2}([0-9]*\.|\+)/mg, '++').replace(/^[0-9]\./mg, '+')
}