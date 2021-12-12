interface F {
  (string: string): string
}
export function apply (s: string, ...funcs: F[]) {
  for (const f of funcs) {
    s = f(s)
  }
  return s
}
