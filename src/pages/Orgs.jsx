import React from 'react';

import Grid from '@material-ui/core/Grid';
import ComponentCard from '../components/ComponentCard';
import Typography  from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core';

const orgs = [
    {src: "./Assets/Organisations/fossasia_copy.png"},
    {src: "./Assets/Organisations/saw_;labs_png.png"},
    {src: "./Assets/Organisations/github_logo.png"},
    {src: "./Assets/Organisations/skit_vernucular_ai_png.png"},
    {src: "./Assets/Organisations/github_logo.png"},
    {src: "./Assets/Organisations/github_logo.png"}

];

const useStyles = makeStyles((theme)=>{
    return {
  
      centerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing(20)
      },
        
    };
  });


function Orgs(props) {

    const classes = useStyles();

    return (
        
        <section id="Orgs">
        <Grid container>
            <Grid item xs={6}>  
            <div class="logo">
                <img src="./Assets/winter_about.svg" alt="" />
            </div>
            </Grid>

            <Grid item xs={6}>
                <Grid container spacing={5} direction="row" alignItems="center">

                    {/* Heading */}
                    <Grid item xs={12}>
                        <Typography variant="h2" color="primary" align="center">
                            Heading goes here
                        </Typography>
                    </Grid>

                   

                    {orgs.map((org, index)=>(
                        <Grid item key={index}>
                        <ComponentCard src={org.src}/>
                        </Grid>
                    )
                    )}

                    <Grid item xs={12}>
                        <div className={classes.centerContainer}>
                            <Button variant="contained" color="default" size="large">
                                PROJECTS
                            </Button>
                        </div>
                    </Grid>

                </Grid>
                
            </Grid>
        </Grid>
        
	</section>
    );

}

export default Orgs;