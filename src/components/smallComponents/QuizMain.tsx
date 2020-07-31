import React, { useEffect, useState } from 'react'
import { getQuizData } from "../services/QuizService"
import { QuestionsRenderType } from "../types/quizTypes"
import { QuestionCard } from "../smallComponents/QuestionCard"
import "../styling/questionCard.css"
export const QuizMain = () => {

    let [quiz, setQuiz] = useState<QuestionsRenderType[]>([])


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

    return (
        <div>
            <QuestionCard
             
                question={quiz[0].question}
                option={quiz[0].option}
            />
        </div>
    )
}

export default QuizMain;