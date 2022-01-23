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

function bigNumber() {
  var numbers = [3, 30, 34, 5, 9];
  var answer = numbers
    .map((c) => c + "")
    .sort((a, b) => b + a - (a + b))
    .join("");

  answer[0] === "0" ? "0" : answer;
  console.log(answer);
}

function hIndex() {
  var citations = [3,0,6,1,5];

  var sortCitations = citations.sort((a, b) => b - a);
  var answer = 0;
  for (let index = 0; index < sortCitations.length; index++) {
    const citation = sortCitations[index];
    if (citation <= index) {
      break;
    }
    answer += 1;
  }

  console.log(answer);
}