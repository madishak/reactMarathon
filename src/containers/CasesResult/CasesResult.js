import * as React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@mui/styles";

const mapStateToProps = (state) => ({
  userData: state.userData,
});

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "15px",
    fontSize: "20px",
  },
});

// View results component 

const CasesResult = (props) => {
  const classes = useStyles();
  const { userData } = props;
  return <div className={classes.root}>Результат: {userData.noun}</div>;
};

export default connect(mapStateToProps)(CasesResult);
