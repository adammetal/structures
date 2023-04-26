//                  0             1         2
const names =      ['Maszat', 'Szimat', 'Morzsa'];
const cutenesses = [10,       9,        8];
const ages =       [2,        1,        5];
const colors =     ['Arany',  'Szurke', 'Piros']

function getPupyByName(name) {
  let findName = name;

  for (let i = 0; i < names.length; i++) {
    if (names[i] === findName) {
      return getPuppy(i);
    }
  }
}

function getPuppy(ind) {
  const name = names[ind];
  const cuteness = cutenesses[ind];
  const age = ages[ind];
  const color = colors[ind];
  return name + ',' + cuteness + ',' + age + ',' + color;
}

function getOldestPuppy() {
  let max = ages[0];
  let ind = 0; // index of oldest puppy

  for (let i = 1; i < ages.length; i++) {
    if (ages[i] > max) {
      max = ages[i];
      ind = i;
    }
  }

  return getPuppy(ind);
}

console.log(getPupyByName("Szimat"));

