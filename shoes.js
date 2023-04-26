const shoes = [
  { name: 'model-jordan-1', size: 32, color: 'red' },
  { name: 'model-chanel', size: 32, color: 'blue' },
  { name: 'model-chanel', size: 34, color: 'red' },
  { name: 'model-chanel', size: 30, color: 'blue' },
  { name: 'model-chanel', size: 38, color: 'blue' },
  { name: 'model-chanel', size: 40, color: 'yellow' },
  { name: 'model-prada', size: 32, color: 'blue' },
];

function findShoe(color, size) {
  for (let i = 0; i < shoes.length; i++) {
    if (shoes[i].color === color && shoes[i].size === size) {
      return shoes[i];
    }
  }
  return null;
}

console.log(findShoe('blue', 32));
