import React from "react";
import "./Text.css";

import {
  makeStyles,
  createTheme,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
// import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const ButtonContainer = styled.div`
  margin-top: 1vw;
  display: flex;
  align-items: space-evenly;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  background-color: transparent;
  width: 50vw;
  @media screen and (max-width: 920px) {
    margin: 0 auto 0 auto;
    width: 100vw;
  }
`;

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
      fontSize: "2.5vw",
    },
    btn: {
      fontFamily: "'Asap', sans-serif",
      marginRight: "1em",
      marginLeft: "1em",
      fontSize: "1.6vw",
      borderRadius: "15px",
      background: "#ACA0F9",
      backgroundColor: "transparent",
      color: "#FFFF",
    },
  };
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      // ----> edit here to change button hover color <----
      dark: "#025560",
      // -----><-----
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
            <a
              href="https://forms.gle/qXnG31bqMyb3jcTe6"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              Register Now
            </a>
          </Button>
          <Button
            className={classes.btn}
            variant="contained"
            size="large"
            color="primary"
            onClick={()=>window.open("https://gdsc-woc.devfolio.co/")}
            target="_blank"
            rel="noreferrer"
          >
            <a
              href="https://gdsc-woc.devfolio.co/"
              className="dev_logo"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <svg
                className="logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 115.46 123.46"
                fill="#fff"
              >
                <path
                  d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 
            12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 
            13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 
            2.18.08 3.34z"
                ></path>
                <path
                  d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 
            104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 
            55.41 0 0 1 50.58 55.34z"
                ></path>
              </svg>
            </a>
            &ensp;Apply with Devfolio
          </Button>
          {/* <Button
            className={classes.btn}
            variant="contained"
            size="large"
            color="primary"
          >
            Mentor
          </Button> */}
        </ButtonContainer>
      </Container>
    </ThemeProvider>
  );
}

export default Text;
