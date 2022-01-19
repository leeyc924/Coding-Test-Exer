// level 2 스파이
function camouflageClick() {
  var clothes = [
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ];

  var object = clothes.reduce(function (target, key, index) {
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

  console.log("solution", solution - 1);
}

// level 3 베스트 앨범
function bestAlbum() {
  var genres = ["classic", "pop", "classic", "classic", "pop"];
  var plays = [500, 600, 150, 800, 2500];

  let answer = [];
  let songs = genres.map((genre, index) => {
      return {
          no: index,
          genre: genre,
          play: plays[index]
      }
  });

  let genrePlayCnt = [];
  songs.forEach(song => {
      let thisGenre = genrePlayCnt.find(genrePlay => genrePlay.genre === song.genre);
      if(!thisGenre){
          genrePlayCnt.push({
              genre: song.genre,
              play: song.play
          });
      }else{
          thisGenre.play += song.play;
      }
  });
  genrePlayCnt.sort((a, b) => b.play - a.play);

  genrePlayCnt.forEach(genrePlay => {
      let thisGenreSongs = songs.filter(song => song.genre === genrePlay.genre);
      thisGenreSongs.sort((a, b) => b.play - a.play);
      answer.push(thisGenreSongs[0].no);
      if(thisGenreSongs.length > 1){
          answer.push(thisGenreSongs[1].no);
      }
  });
  
  console.log('answer', answer);
}
