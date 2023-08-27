const scores = [
  { score: 90, subject: 'HTML', weight: 0.2 },
  { score: 95, subject: 'CSS', weight: 0.3 },
  { score: 85, subject: 'JavaScript', weight: 0.5 },
];

function avgWeight(arr) {
  const scoreWeight = arr.reduce(
    (sum, item) => sum + item.score * item.weight,
    0
  );
  const sumWeight = arr.reduce((sum, item) => sum + item.weight, 0);
  let result = scoreWeight / sumWeight;
  console.log(result);
}

avgWeight(scores);
