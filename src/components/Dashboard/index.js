import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  LoadingComponent,
  SearchInputComponent,
  MatchPlayersComponent,
} from "../Common";

import { sagaActions } from "../../redux";

import { getMatchedPlayers } from "../../utils";

const DashboardComponent = () => {
  const dispatch = useDispatch();

  const players = useSelector((state) => state.players.data);
  const loading = useSelector((state) => state.players.loading);

  const [totalHeight, setTotalHeight] = useState(0);

  const matchedPlayers = useMemo(() => {
    console.log(getMatchedPlayers(players, totalHeight));
    return getMatchedPlayers(players, totalHeight);
  }, [players, totalHeight]);

  useEffect(() => {
    dispatch(sagaActions.players.getPlayers({}));
  }, [dispatch]);

  const onSearchMatchedPlayers = (totalHeight) => {
    setTotalHeight(totalHeight);
  };

  return (
    <>
      <div className="flex justify-center">
        <SearchInputComponent search={onSearchMatchedPlayers} />
      </div>
      <div>
        {matchedPlayers.length ? (
          matchedPlayers.map((matchedPlayer, index) => (
            <MatchPlayersComponent
              key={index}
              player={matchedPlayer.player}
              matchedPlayer={matchedPlayer.matchedPlayer}
            />
          ))
        ) : (
          <div className="text-3xl text-center">No matched players!!!</div>
        )}
      </div>
      {loading && <LoadingComponent />}
    </>
  );
};

export default DashboardComponent;
