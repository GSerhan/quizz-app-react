import { FETCH_QUESTIONS, UPDATE_INDEX_SELECTED_QUESTION, UPDATE_CORRECT_ANSWERS, UPDATE_SELECTED_ANSWER } from "../types"

const initialState = {
    questions: [],
    selectedQuestionIndex: 0,
    correctAnswers: [],
    selectedAnswer: {}
}

export const quizReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_QUESTIONS:
            return {
                ...state,
                questions: action.payload
            }
        case UPDATE_CORRECT_ANSWERS:
            return {
                ...state,
                correctAnswers: action.payload
            }
        case UPDATE_INDEX_SELECTED_QUESTION:
            return {
                ...state,
                selectedQuestionIndex: action.payload
            }   
        case UPDATE_SELECTED_ANSWER:
            return {
                ...state,
                selectedAnswer: action.payload
            }            
        default:
            return state;     
    }
} 