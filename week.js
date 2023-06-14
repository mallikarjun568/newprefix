let obj = [
  {
    tp: 1,
    tp_name: "tp1",
    goal: "c",
    hp: "fvav",
  },
  {
    tp: 1,
    tp_name: "tp1",
    goal: "cd",
    hp: "dvzdf",
  },
  {
    tp: 1,
    tp_name: "tp1",
    goal: "cjgku",
    hp: "avarf",
  },
  {
    tp: 2,
    tp_name: "tp2",
    goal: "csva",
    hp: "avawr",
  },
  {
    tp: 2,
    tp_name: "tp2",
    goal: "c",
    hp: "qklqe",
  },
];

let arr = [];
function transformObjects(objArray) {
  const transformedArray = [];

  const groupedObjects = objArray.reduce((acc, obj) => {
    console.log(acc,obj,'--');
    const tp = obj.tp;

    if (!acc[tp]) {
      acc[tp] = {
        tp: obj.tp,
        tp_name: obj.tp_name,
        goal: [],
      };

      transformedArray.push(acc[tp]);
    }

    acc[tp].goal.push({ goal: obj.goal, hi: obj.hi });

    return acc;
  }, {});

  return transformedArray;
}
const transformedArray = transformObjects(obj);
console.log(transformedArray);
//console.log(JSON.stringify(transformedArray), "aa");
