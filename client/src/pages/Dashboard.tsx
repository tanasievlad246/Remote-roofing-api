import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreatorsMapObject, bindActionCreators } from "redux";
import { actionCreators } from "../state";

function Dashboard(): JSX.Element {
  const dispatch = useDispatch();
  const { getTasksAction }: ActionCreatorsMapObject = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state) => state);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasksAction();
    console.log(state);
  }, []);

  return (
    <div className="App">
      {/* Display all user projects, todos, todos assigned to him, trough sub views */}
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
