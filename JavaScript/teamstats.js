//this goes over obbjects, getters and adding info using an array in a getter

const team = {
    _players:[
      {firstName:'Shane', lastName: 'Chaffe', age: 25},
      {firstName:'Kat', lastName: 'Tseng', age: 28},
      {firstName:'Matt', lastName: 'Turner', age: 35}
    ],
    _games:[
      {opponent:'Arsenal', teamPoints: 28, opponentPoints: 32},
      {opponent:'England', teamPoints: 8, opponentPoints:6},
      {opponent:'Taiwan', teamPoints:40, opponentPoints:45}
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
     let player = {
       firstName: newFirstName,
       lastName: newLastName,
       age: newAge
     };
     this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game)
    }
};
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
console.log(team.games)
console.log(team.players);