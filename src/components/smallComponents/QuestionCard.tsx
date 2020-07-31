import React from 'react'
import { questionPropsType } from '../types/quizTypes'
import "../styling/questionCard.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CardContent from '@material-ui/core/CardContent';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 70,
        background: theme.palette.primary.main,
        textAlign: "center"
    },
    button: {
        margin: theme.spacing(1),
        background: theme.palette.secondary.main,
        color: theme.palette.text.secondary
    },
}));
export const QuestionCard: React.FC<questionPropsType> = ({ question, option }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState([]);

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <h3>{question}</h3>
                {/* //rendring options */}

                <FormControl component="fieldset">
                    <FormLabel component="legend">Options</FormLabel>

                    {
                        option.map((opt: string, ind: number) => {
                            return (
                                <RadioGroup key={ind} aria-label="quiz" name="quiz" value={value} onChange={handleChange} >
                                    <FormControlLabel value={opt} control={<Radio />} label={opt} />

                                </RadioGroup>
                            )
                        }
                        )}

                </FormControl>



            </CardContent>
            <Button
                variant="contained"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
            >
                Next
      </Button>
        </Card>
    )
}
