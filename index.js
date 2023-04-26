function warnTheSheep(queue) {
  let sheeps = 0;
  let animal = queue.pop();

  while(animal) {
    if (animal === 'sheep') {
      sheeps++;
    } else {
      break;
    }

    animal = queue.pop();
  }

  if (sheeps === 0) {
    return "Pls go away and stop eating my sheep";
  } else {
    return "Oi! Sheep number " + sheeps + "! You are about to be eaten by a wolf!"
  }
}

console.log(warnTheSheep(['sheep', 'sheep', 'wolf', 'sheep'])); // 1

/*
legyen n a tömb hossza

legyen az allat a sor elejen levo
ciklus amig van allat
  ha az allat bari
     akkor noveld barik szama
  kulonben
     ciklus vege

ha barik szama 0 akkor ird:
  Pls go away and stop eating my sheep
kulonben
  "Oi! Sheep number (barikSzama)! You are about to be eaten by a wolf!"
*/
