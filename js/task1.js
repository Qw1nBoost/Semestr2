function isBalanced(str) {
    const openBraces = ['(', '[', '{'];
    const closeBraces = [')', ']', '}'];
    let stack = [];
  
    for (let el of str) {
        if (openBraces.includes(el)) {
            stack.push(el);
        } else if (closeBraces.includes(el)) {
            if (!stack.length || openBraces.indexOf(stack.pop()) !== closeBraces.indexOf(el)) {
                return false;
            }
        }
    }
  
    return !stack.length;
}

console.log(isBalanced('()[({}())]'));