import React from "react";
import { Route, Routes } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  root: { color: "red" }
});
const App = () => {
  const classes = useStyles({});
  return (
    <div>
      <h1 className={classes.root}>Gooooddsoo</h1>
    </div>
  );
};
export default App;
