function camouflageClick() {
  var clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];

  var object = clothes.reduce(function(target, key, index) {
    if (target[key[1]]) {
      target[key[1]].push(key[0]);
    } else {
      target[key[1]] = [key[0]];
    }
    return target;
  }, {});

  var solution = 1;
  for (const key in object) {
    solution *= object[key].length + 1;
  }

  console.log('solution', solution - 1);
}