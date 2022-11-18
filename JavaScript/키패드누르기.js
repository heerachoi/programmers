function solution(numbers, hand) {
  var answer = '';
  let numPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  let currentLeft = [3, 0];
  let currentRight = [3, 2];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 1 || numbers[i] == 4 || numbers[i] == 7) {
      currentLeft = numPad[numbers[i]];
      answer += 'L';
    } else if (numbers[i] == 3 || numbers[i] == 6 || numbers[i] == 9) {
      currentRight = numPad[numbers[i]];
      answer += 'R';
    } else {
      let leftDistance = getDistance(currentLeft, numPad[numbers[i]]);
      let rightDistance = getDistance(currentRight, numPad[numbers[i]]);
      if (leftDistance > rightDistance) {
        currentRight = numPad[numbers[i]];
        answer += 'R';
      } else if (leftDistance < rightDistance) {
        currentLeft = numPad[numbers[i]];
        answer += 'L';
      } else {
        if (hand == 'right') {
          currentRight = numPad[numbers[i]];
          answer += 'R';
        } else {
          currentLeft = numPad[numbers[i]];
          answer += 'L';
        }
      }
    }
  }
  return answer;
}

function getDistance(x, y) {
  return Math.abs(x[0] - y[0]) + Math.abs(x[1] - y[1]);
}
