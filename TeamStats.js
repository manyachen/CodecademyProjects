const team = {
    _players:[
        {  
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        }
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
          }
    ],

    get players(){
        return this._players;
    },

    get games(){
        return this._games;
    },

    addPlayer(firstName, lastName, age){
        var player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },

    addGame(opponent, teamPoints, opponentPoints){
        var game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        }
        this.games.push(game);
    }
}

team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Lesile',44);
team.addPlayer('Bugs','Bunny',76);

console.log(team.players);

team.addGame('Red Sox',43,28);
team.addGame('Yankees',55,38);
team.addGame('Bruins',41,21);

console.log(team.games);