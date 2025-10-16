function intercalare(a, b) {
  let r = []
  let maxLength = Math.max(a.length, b.length)

  for (let i = 0; i < maxLength; i++) {
    if (i < a.length) r.push(a[i])
    if (i < b.length) r.push(b[i])
  }
  return r
}

console.log(intercalare([1,2], [6,7,8]))