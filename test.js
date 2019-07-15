// const findGroups = employees => {
//   let arr = employees;
//   let maxDepth = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let thisDepth = 0;
//     let t = i;
//     while (arr[t] != -1) {
//       t = arr[t] - 1;
//       thisDepth++;
//     }
//     if (thisDepth > maxDepth) {
//       maxDepth = thisDepth;
//     }
//   }
//   return maxDepth + 1;
// };

// console.log(findGroups([-1, 1, 2, 1, -1]));
//

const isThereATriangle = graph => {
  let step;
  for (let i = 1; i <= graph.length; i++) {
    step = graph[i];
    for (let y = 0; y < 2; y++) {
      step = graph[step];
    }
    if (step == i) {
      return true;
    }
    return false;
  }
};

const findLove = planes => {
  const graph = {};
  let arr = planes.split(' ');
  for (let i = 0; i < arr.length; i++) {
    graph[i + 1] = arr[i];
  }
  if (isThereATriangle(graph)) {
    return 'yes';
  } else {
    return 'no';
  }
};
console.log(findLove('5 5 4 5 3'));
