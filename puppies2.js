// Key = value set
const a = 10;

const maszat = {
  color: 'Arany',
  name: 'Maszat',
  cuteness: 10,
  age: 2,
};

const szimat = {
  color: 'Szurke',
  name: 'Szimat',
  cuteness: 9,
  age: 1,
};

const morzsa = {
  cuteness: 8,
  age: 5,
  color: 'Piros',
  name: 'Morzsa',
  'number of teeths': 32
};

// this is for demo, not for production
let puppies = {
  0: maszat,
  1: szimat,
  2: morzsa,
  length: 3
}

puppies = [maszat, szimat, morzsa];
puppies[0];

maszat['name']; // Maszat
maszat.name // Maszat
morzsa['number of teeths']; //32

for (let i = 0; i < puppies.length; i++) {
  console.log(puppies[i]['name'], puppies[i]['cuteness']);
}

function getPuppy(ind) {
  const puppy = puppies[ind];
  return puppy;
  //return puppy.name + ',' + puppy.cuteness + ',' + puppy.age + ',' + puppy.color;
}

console.log(getPuppy(1));
