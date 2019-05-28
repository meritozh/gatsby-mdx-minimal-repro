import * as R from 'ramda'

export const numberfiy = input => {
  if (!input) {
    return []
  }
  const lines = R.map(e => e.trim(), input.split(`,`))
  const nums = R.map(str => {
    if (R.includes(`-`, str)) {
      const r = R.map(c => parseInt(c.trim()), str.split(`-`))
      return R.range(r[0], r[1] + 1)
    } else {
      return [parseInt(str.trim())]
    }
  }, lines)
  return R.reduce(R.concat, [], nums)
}

export const needHighlight = (line, highlightLines) => {
  return R.includes(line, highlightLines)
}
