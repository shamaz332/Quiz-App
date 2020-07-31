

export type QuestionsType = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type AnsType =
    {
        question: string
        answer: string
        option: string

    }