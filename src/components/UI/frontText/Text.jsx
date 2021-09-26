import React from 'react';
import { makeStyles, createTheme, ThemeProvider, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme)=>{
  return {
        container: {
            background: 'transparent',
            width: '60%',
           
        },
        head: {
            marginTop: theme.spacing(30),
            fontSize: "150px"
        },
        text: {
            // color: "#4e342e"
            color: "#ACA0F9"
        },
        btn: {
            fontSize: "30px",
            background: "transparent",
            // color: "black",
            color: "#ACA0F9",
            marginLeft: theme.spacing(12)
        }
      
  };
});

const theme = createTheme({
  palette: {
      primary:{
        main: "#FFFFFF",
        main: "#FFFFFF",
        light: "#FFFFFF",
        dark: "#FFFFFF",
        contrastText: "#ffff"

        //   main: "#616161",
        //   light: "#616161",
        //   dark: "#616161",
        //   contrastText: "#ffff"
      }
  }
});

function Text(props) {

    const classes = useStyles();

    return (
    <ThemeProvider theme={theme}>  
        <Paper elevation={0} className={classes.container}>
            <Typography color="primary" variant="h1" className={classes.head} align="center">
                WINTER OF CODE
            </Typography>
            <br/>
            <Typography variant="h4" className={classes.text} align="center">
                RESGISTER AND SUBMIT PROPOSAL
            </Typography>
            <br/>
            <Button className={classes.btn} variant="contained" size="large" color="primary" onClick={()=>console.log("clicked")}>Student</Button>
            <Button className={classes.btn} variant="contained" size="large" color="primary">Mentor</Button>
        </Paper>
     </ThemeProvider>

    );

}

export default Text;