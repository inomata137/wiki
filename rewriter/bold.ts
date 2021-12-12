export default function (str: string) {
  return str.replace(/(?<!^ .+)\*{2}(.+)\*{2}/mg, "''$1''")
}