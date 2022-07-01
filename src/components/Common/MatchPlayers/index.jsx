import React from "react";

const MatchPlayersComponent = ({ player, matchedPlayer }) => {
  return (
    <div className="text-center text-2xl border-2 rounded-lg">
      <b>{`${player.first_name} ${player.last_name} (${player.h_in})`}</b>
      &nbsp;&nbsp;{"=>"}&nbsp;&nbsp;
      <b>{`${matchedPlayer.first_name} ${matchedPlayer.last_name} (${matchedPlayer.h_in})`}</b>
    </div>
  );
};

export default MatchPlayersComponent;
