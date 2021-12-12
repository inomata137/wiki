import { apply } from './util'
import heading from './heading'
import link from './link'
import ol from './ol'
import ul from './ul'
import n from './n'
import bold from './bold'
import pre from './pre'
import stroke from './stroke'
export default function (str: string) {
  str = apply(str, pre)
  return apply(str, heading, link, ol, ul, n, bold, stroke)
}
