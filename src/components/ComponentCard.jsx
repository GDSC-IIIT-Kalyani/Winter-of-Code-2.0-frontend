import React from "react";

import Paper from "@material-ui/core/Paper";

import { makeStyles, createTheme, ThemeProvider } from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => {
  return {
    inputContainer: {
      backgroundColor: "transparent",
      width: "200px",
      padding: theme.spacing(3),
    },
    centerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "200px",
    },
  };
});

const theme = createTheme({
  palette: {},
});

function ComponentCard({ src }) {
  const classes = useStyles();

  return (
    // animation
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Paper elevation={3} className={classes.inputContainer}>
        <div className={classes.centerContainer}>
          <img src={src} className={classes.image} />
        </div>
      </Paper>
    </motion.div>
  );
}

export default ComponentCard;
