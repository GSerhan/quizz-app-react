import { FETCH_QUESTIONS, UPDATE_INDEX_SELECTED_QUESTION, UPDATE_CORRECT_ANSWERS, UPDATE_SELECTED_ANSWER, UPDATE_FINISH_MODAL } from "../types"

const initialState = {
    questions: [],
    selectedQuestionIndex: 0,
    correctAnswers: [],
    selectedAnswer: {},
    finishModal: false
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
        case UPDATE_FINISH_MODAL:
            return {
                ...state,
                finishModal: action.payload
            }                
        default:
            return state;     
    }
} 