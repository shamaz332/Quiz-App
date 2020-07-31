import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HeaderPic from "../images/student.svg"
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>


                <Grid item xs={12} sm={7}>
                    <img src={HeaderPic} alt="header" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <h1>Test your Knowledge with Quizy</h1>
                </Grid>

            </Grid>
        </div>
    );
}
