function actualMath(num0, num1) {
  console.log('in actualMath:', num0, num1);
  let answer = num0 * num1;
  return answer;
} //end actualMath

function logger() {
console.log('in logger');
} //end logger

function mathExample() {
  console.log('in mathExample');
  let answer = 3 * 9;
  return answer;
} //end mathExample

function returner() {
  console.log('in returner');
  return true;
} //end returner

function averageForThree(num0, num1, num2) {
  console.log('in averageForThree:', num0, num1, num2);
  let answer = (num0 + num1 + num2) /3
  return answer;
} // end averageForThree

logger();
returner();
console.log('running returner:', returner());
console.log('running mathExample:', mathExample());
console.log('running actualMath with 4 & 6:', actualMath(4, 6));
console.log('running actualMath with 3 & 7:', actualMath(3, 7));
console.log('running actualMath with 5 & 8:', actualMath(5, 8));
console.log('running actualMath with 0.745 & 936:', actualMath(0.745, 936));
console.log('running actualMath with 2.56e11 & 0.53098:', actualMath(2.56e11, .53098));
console.log('running averageForThree with 2 & 3 & 4:', averageForThree(2, 3, 4));
console.log('running averageForThree with 234 & 768 & 444:', averageForThree(234, 768, 444));
console.log('running averageForThree with .2 & -3 & 4:', averageForThree(0.2, -3, 4));
