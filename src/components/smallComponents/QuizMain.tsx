import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { getQuizData } from "../services/QuizService"
import { QuestionsRenderType } from "../types/quizTypes"
import { QuestionCard } from "../smallComponents/QuestionCard"
import "../styling/questionCard.css"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
const useStyles = makeStyles((theme) => ({
    root: {
        margin: 70,
        background: theme.palette.primary.main,
        textAlign: "center",
    },

}));
export const QuizMain = () => {
    const classes = useStyles();


    let [quiz, setQuiz] = useState<QuestionsRenderType[]>([])
    let [currentQuestion, setCurrentQuestion] = useState(0)
    let [results, setResults] = useState(0)

    //APi Call
    useEffect(() => {
        async function dataFromApi() {
            const questions: QuestionsRenderType[] = await getQuizData(5, "easy");
            // return questions;
            console.log(questions)
            setQuiz(questions)

        }
        // return dataFromApi
        dataFromApi()
        // console.log(dataFromApi())
    }, [])


    if (!quiz.length)
        return <div className="lds-hourglass"></div>
    const handleNextQuestion = (e: React.FormEvent<EventTarget>, selectedAns: string) => {
        // if () {
        //     console.log("emot")
        //     setCurrentQuestion(0)
        // }
        e.preventDefault()

        const currentSlectedQuestion: QuestionsRenderType = quiz[currentQuestion]

        if (selectedAns === currentSlectedQuestion.correct_answer) {
            setResults(++results)

        }

        if (currentQuestion !== quiz.length - 1)
            return (
                setCurrentQuestion(++currentQuestion))

        else {

            setCurrentQuestion(0)
            setResults(0)
            alert(results)
            window.location.reload(false)


        }

    }
    return (
        <div>
            <QuestionCard

                question={quiz[currentQuestion].question}
                option={quiz[currentQuestion].option}
                callback={handleNextQuestion}

            />
            <Card className={classes.root}>
                <CardContent>
                    <h1>Result : {results}/{quiz.length}</h1>

                </CardContent>

            </Card>

        </div>
    )
}

export default QuizMain;