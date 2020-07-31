import { type } from "os"


export type QuestionsType = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type QuestionsRenderType =
    {
        question: string
        answer: string
        option: string[]
        correct_answer: string

    }


    export type questionPropsType = 
    {
        question: string
    option: string[]
    }