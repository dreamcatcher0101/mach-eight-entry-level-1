const searchMatchedPlayer = (players, totalHeight) => {
  const result = {};
  const matchedPlayers = [];

  players.forEach((player) => {
    if (result[player.h_in]) {
      result[player.h_in].names.push(player);
    } else {
      const height = totalHeight - Number(player.h_in);
      if (height > 0) {
        if (result[height]) {
          result[height].matches.push(player);
        } else {
          result[player.h_in] = {
            names: [player],
            matches: [],
          };
        }
      }
    }
  });

  for (let match in result) {
    const { names, matches } = result[match];
    if (names.length && matches.length) {
      names.forEach((player) => {
        matches.forEach((matchedPlayer) => {
          matchedPlayers.push({
            player: player,
            matchedPlayer: matchedPlayer,
          });
        });
      });
    }
  }

  return matchedPlayers;
};

export default searchMatchedPlayer;
