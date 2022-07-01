import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LoadingComponent, SearchInputComponent } from "../Common";

import { sagaActions } from "../../redux";

const DashboardComponent = () => {
  const dispatch = useDispatch();

  const players = useSelector((state) => state.players.data);
  const loading = useSelector((state) => state.players.loading);

  const [totalHeight, setTotalHeight] = useState(0);

  const matchedPlayers = useMemo(() => {
    return players;
  }, [players, totalHeight]);

  useEffect(() => {
    dispatch(sagaActions.players.getPlayers({}));
  }, [dispatch]);

  const onSearchMatchedPlayers = (totalHeight) => {
    alert(totalHeight);
  };

  return (
    <>
      <div className="flex justify-center">
        <SearchInputComponent search={onSearchMatchedPlayers} />
      </div>
      {loading && <LoadingComponent />}
    </>
  );
};

export default DashboardComponent;
