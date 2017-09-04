export const buttons = [
  {clear: 'C'},
  {swapSign: '+/-'},
  {modulo: '%'},
  {divide: '/'},
  {7: 7},
  {8: 8},
  {9: 9},
  {multiple: 'x'},
  {4: 4},
  {5: 5},
  {6: 6},
  {minus: '-'},
  {1: 1},
  {2: 2},
  {3: 3},
  {plus: '+'},
  {0: 0},
  {decimal: '.'},
  {equal: '='}
];

export const types = {
  nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'],
  controls: ['C', '+/-', '%', '='],
  operators: ['/', 'x', '-', '+']
}

export const add = (x, y) => x + y;
export const subtract = (x, y) => x - y;
export const multiply = (x, y) => x * y;
export const divide = (x, y) => x / y;