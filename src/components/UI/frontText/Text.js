import React from "react";
import "./Text.css";

import {
  makeStyles,
  createTheme,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import styled from 'styled-components'

const ButtonContainer = styled.div`
  margin-top: 1vw;
  display: flex;
  align-items: space-evenly;
  justify-content: center;
  width: 100%;
`

const Container = styled.div`
  background-color: transparent;
  width: 50vw;
  @media screen and (max-width: 920px) {
    margin: 0 auto 0 auto;
    width: 100vw;
  }
`

const useStyles = makeStyles((theme) => {
  return {
    container: {
      background: "transparent",
      margin: "0 auto 0 auto",
      width: "100vw",
    },
    head: {
      marginTop: theme.spacing(30),
      fontSize: "7vw",
      fontFamily: "'Fjalla One', sans-serif",
    },
    text: {
      // color: "#4e342e"
      color: "#FFF",
      fontSize: "2.5vw"
    },
    btn: {
      fontFamily: "'Asap', sans-serif",
      marginRight: "1em",
      marginLeft: "1em",
      fontSize: "1.8vw",
      borderRadius: "15px",
      background: "#ACA0F9",
      // color: "black",
      color: "#FFFF",
    },
  };
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      dark: "#FFFFFF",
      contrastText: "#ffff",

      //   main: "#616161",
      //   light: "#616161",
      //   dark: "#616161",
      //   contrastText: "#ffff"
    },
  },
});

function Text(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography
          color="primary"
          variant="h1"
          className={classes.head}
          align="center"
        >
          WINTER OF CODE
        </Typography>
        <br />
        <Typography variant="h4" className={classes.text} align="center">
          REGISTER AND SUBMIT PROPOSAL
        </Typography>
        <br />
        <ButtonContainer>
            <Button
              className={classes.btn}
              variant="contained"
              size="large"
              color="primary"
              onClick={() => console.log("clicked")}
            >
              Student
            </Button>
            <Button
              className={classes.btn}
              variant="contained"
              size="large"
              color="primary"
            >
              Mentor
            </Button>
        </ButtonContainer>
      </Container>
    </ThemeProvider>
  );
}

export default Text;
