import { FETCH_QUESTIONS, UPDATE_INDEX_SELECTED_QUESTION, UPDATE_CORRECT_ANSWEARS, UPDATE_SELECTED_ANSWEAR } from "../types"

const initialState = {
    questions: [],
    selectedQuestionIndex: 0,
    correctAnswers: [],
    selectedAnswear: {}
}

export const quizReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_QUESTIONS:
            return {
                ...state,
                questions: action.payload
            }
        case UPDATE_CORRECT_ANSWEARS:
            return {
                ...state,
                correctAnswers: action.payload
            }
        case UPDATE_INDEX_SELECTED_QUESTION:
            return {
                ...state,
                selectedQuestionIndex: action.payload
            }   
        case UPDATE_SELECTED_ANSWEAR:
            return {
                ...state,
                selectedAnswear: action.payload
            }            
        default:
            return state;     
    }
} 