module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][0]) {
        bracketsConfig[j][0] === bracketsConfig[j][1] && stack[stack.length - 1] === bracketsConfig[j][0] && stack.length > 0 ? stack.pop() : stack.push(str[i]);
      } else {
        if (str[i] == bracketsConfig[j][1]) {
          if (stack[stack.length - 1] == bracketsConfig[j][0] && stack.length !== 0) {
            stack.pop()
          }
        }
      }
    }
  }
  return stack.length === 0;
}
