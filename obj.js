function transformObject(obj) {
  const transformedArray = [];

  obj.forEach(item => {
    const existingItem = transformedArray.find(transformedItem => transformedItem.tp === item.tp);
    if (existingItem) {
      existingItem.goals.push(item.goal);
    } else {
      transformedArray.push({
        tp: item.tp,
        tp_name: item.tp_name,
        goals: [item.goal]
      });
    }
  });

  return transformedArray;
}

// Example usage:
const obj = [
  { tp: 1, tp_name: 'tp1', goal: 'c' },
  { tp: 1, tp_name: 'tp1', goal: 'cd' },
  { tp: 1, tp_name: 'tp1', goal: 'cjgku' },
  { tp: 2, tp_name: 'tp2', goal: 'csva' },
  { tp: 2, tp_name: 'tp2', goal: 'c' }
];

const transformedArray = transformObject(obj);
console.log(transformedArray);
