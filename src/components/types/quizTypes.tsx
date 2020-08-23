export type QuestionsType = {
    category: string
    correct_answer: string
    incorrect_answers: string[]
    question: string
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
        callback:(e:React.FormEvent<EventTarget>,ans:string)=>void
        // check: string
    }