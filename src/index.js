module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let closeBrackets = [];
  for (item of bracketsConfig) {
    openBrackets.push(item[0]);
    closeBrackets.push(item[1]);
  }
  
  let Arr = str.split('');
  let stack = [];
  for (item of Arr) {
    i = openBrackets.indexOf(item);
    k = closeBrackets.indexOf(item);

    if(i != -1) {
      stack.push(i);
    } else if (stack.length === 0 || stack[stack.length - 1] != k) {
      return false;
    } else {
      stack.pop();
    }

    if(i === k && (stack[stack.length - 1] === i) && (stack[stack.length - 2] === i)) {
      stack.pop();
      stack.pop();
    }
  }
  
  return (stack.length === 0);
}