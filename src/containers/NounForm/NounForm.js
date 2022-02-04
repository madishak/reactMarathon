import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GET_USER_DATA } from "../../constants";
import { makeStyles } from "@mui/styles";
import { TextField, MenuItem, Select, Button } from "@mui/material";


const useStyles = makeStyles({
  root: {},
  form: {
    display: "flex",
    flexFlow: "wrap",
    margin: "0 auto",
    justifyContent: "space-around",
    fontSize: "34px",
    width: "60%",
  },
  text: {
    textAlign: "center",
    padding: "20px",
  },
  input: {
    marginTop: "15px",
  },
  select: {
    marginTop: "15px",
  },
  button: {
    marginTop: "15px",
  },
});

const NounForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [noun, setNoun] = useState("");
  const [cases, setCases] = useState("im");

  const handleChangeNoun = (e) => {
    setNoun(e.target.value);
  };

  const handleChangeCase = (e) => {
    setCases(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: GET_USER_DATA, noun, cases });
  };

  return (
    <div className={classes.root}>
      <div className={classes.text}>
        Введите существительное в единственном числе
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          onChange={handleChangeNoun}
          className={classes.input}
          label="Слово"
          variant="standard"
          required={true}
        />
        {/* <select onChange={handleChangeCase}>
            <option value='im'>Именительный падеж</option>
            <option value='rt'>Родительный падеж</option>
            <option value='dt'>Дательный падеж</option>
            <option value='vn'>Винительный падеж</option>
            <option value='tv'>Творительный падеж</option>
            <option value='pr'>Предложный падеж</option>
          </select> */}

        <Select
          value={cases}
          className={classes.select}
          onChange={handleChangeCase}
        >
          <MenuItem value="im">Именительный падеж</MenuItem>
          <MenuItem value="rt">Родительный падеж</MenuItem>
          <MenuItem value="dt">Дательный падеж</MenuItem>
          <MenuItem value="vn">Винительный падеж</MenuItem>
          <MenuItem value="tv">Творительный падеж</MenuItem>
          <MenuItem value="pr">Предложный падеж</MenuItem>
        </Select>

        <Button
          type="submit"
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          Просклонять
        </Button>
        {/* <button type='submit'>Просклонять</button> */}
        {/* </FormControl> */}
      </form>

    </div>
  );
};

export default NounForm;
