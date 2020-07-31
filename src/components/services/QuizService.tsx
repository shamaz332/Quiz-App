import { QuestionsType , QuestionsRenderType} from "../types/quizTypes"

const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)

export const getQuizData = async (questionsNumber: number, level: string): Promise<QuestionsRenderType[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${questionsNumber}&difficulty=${level}&type=multiple`)
    let { results } = await res.json();

    const quiz:QuestionsRenderType[] = results.map((questionObj: QuestionsType) => {
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            correct_answer: questionObj.correct_answer,
            option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    return quiz
}
