export const validCharacters = "0123456789.+-";

export const operators = {
  plus: "+",
  subtract: "-",
  multiple: "*",
  division: "/",
  percent: "%",
};

export const controls = {
  AC: "AC",
  Equal: "=",
  Remove: "X",
};

export const typeCal = {
  control: "control", // AC, =, X
  operator: "operator", // +, -, *, /, %
  numAndChar: "numAndChar", // 0->9, .
};

const calculator = {
  sum: (a, b) => a + b,

  subtract: (a, b) => a - b,

  multiple: (a, b) => a * b,

  division: (a, b = 1) => {
    let result = 0;
    if (b !== 0) {
      result = a / b;
    }
    return result;
  },
  percent: (a) => a / 100,
};

export default calculator;
