import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LoadingComponent } from "../Common";

import { sagaActions } from "../../redux";

const DashboardComponent = () => {
  const dispatch = useDispatch();

  const players = useSelector((state) => state.players.data);
  const loading = useSelector((state) => state.players.loading);

  useEffect(() => {
    dispatch(sagaActions.players.getPlayers({}));
  }, [dispatch]);

  useEffect(() => {
    console.log("players:", players);
  }, [players]);

  return (
    <>
      <div className="text-3xl text-center mt-5">Welcome to Dashboard!!!</div>
      {loading && <LoadingComponent />}
    </>
  );
};

export default DashboardComponent;
