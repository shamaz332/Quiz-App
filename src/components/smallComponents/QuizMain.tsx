import React, { useEffect, useState } from 'react'
import { getQuizData } from "../services/QuizService"
import { QuestionsType } from "../types/quizTypes"
import { QuestionCard } from "../smallComponents/QuestionCard"
export const QuizMain = () => {

    let [quiz, setQuiz] = useState<QuestionsType[]>([])


    //APi Call
    useEffect(() => {
        async function dataFromApi() {
            const questions: QuestionsType[] = await getQuizData(5, "easy");
            // return questions;
            console.log(questions)
            setQuiz(questions)

        }
        // return dataFromApi
        dataFromApi()
        // console.log(dataFromApi())
    }, [])




    return (
        <div>
            <QuestionCard />
        </div>
    )
}

export default QuizMain;