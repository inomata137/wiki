export default function (str: string) {
  return str.replace(/(?<!^ .+)\[(.+)\]\((.+)\)/mg, '[[$1>$2]]')
}