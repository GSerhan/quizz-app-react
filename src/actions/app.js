import { API_QUESTIONS_URL } from "../config/api";
import { FETCH_QUESTIONS, UPDATE_INDEX_SELECTED_QUESTION, UPDATE_CORRECT_ANSWERS, UPDATE_SELECTED_ANSWER, UPDATE_FINISH_MODAL, RESTART_QUIZ } from "../types";

export const getQuestions = () => async dispatch => {
    await fetch(API_QUESTIONS_URL)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(item => {
                const newArray = [];
                item.all_answers = [...item.incorrect_answers, item.correct_answer];
                item.all_answers.sort(() => Math.random() - 0.5);
                item.all_answers.forEach(element => {
                    newArray.push({
                        name: element,
                        class: 'null'
                    })
                })
                item.all_answers = [...newArray];
            })
            dispatch({
                type: FETCH_QUESTIONS,
                payload: data.results
            })
        });
}

export const updateSelectedQuestionIndex = value => {
    return {
        type: UPDATE_INDEX_SELECTED_QUESTION,
        payload: value
    }
}

export const updateCorrectAnswers = value => (dispatch, getState) => {
    return {
        type: UPDATE_CORRECT_ANSWERS,
        payload: getState().appStore.correctAnswers.push(value)
    }
}

export const updateSelectedAnswer = value => {
    return {
        type: UPDATE_SELECTED_ANSWER,
        payload: value
    }
}

export const updateFinishModal = value => {
    return {
        type: UPDATE_FINISH_MODAL,
        payload: value
    }
}

export const restartQuiz = () => {
    return {
        type: RESTART_QUIZ
    }
}
