module.exports = function check(str, bracketsConfig) {

  const openBrackets = ['(', '{', '['];
  const bracketsPair = {
    [')']:'(',
    ['}']:'{',
    [']']:'[',
  };

  function isBracketsHasPair(str) {
    let stack = [];
    for(let i = 0; i < str.length; i++) {
      let currentBracket = str[i];
      if(openBrackets.includes(currentBracket)) {
        stack.push(currentBracket);
      } else {
        if(stack.length === 0) {
          return false;
        }

        let topElement = stack[stack.length - 1];
        if(bracketsPair[currentBracket] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
  } return isBracketsHasPair(str)

};
