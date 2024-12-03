export function plus(a, b) {
  return a + b;
}

export default function minus(a, b) {
  return a - b;
}

// ↓は `module.exports = {plus: plus, minus: minus}` と同義
// export { plus, minus };
