const team = {
  _players: [
    { firstName: "Nina", lastName: "Kukawska", age: 40 },
    { firstName: "Iza", lastName: "Kisio", age: 64 },
    { firstName: "Monika", lastName: "Bytnar", age: 35 },
  ],
  _games: [
    { opponent: "Nowakowska", teamPoints: 10, opponentPoints: 20 },
    { opponent: "Black", teamPoints: 30, opponentPoints: 40 },
    { opponent: "Ada", teamPoints: 50, opponentPoints: 60 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);
team.addGame("Titans", 100, 98);
console.log(team.games);
g6;
