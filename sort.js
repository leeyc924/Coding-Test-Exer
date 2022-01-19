function kNumber() {
  var array = [1, 5, 2, 6, 3, 7, 4];
  var commands = [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ];

  var answer = commands.map(
    (command, index) =>
      array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[
        command[2] - 1
      ]
  );
  console.log(answer);
}
