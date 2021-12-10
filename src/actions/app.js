import { API_QUESTIONS_URL } from "../config/api";
import { FETCH_QUESTIONS, UPDATE_INDEX_SELECTED_QUESTION, UPDATE_CORRECT_ANSWEARS, UPDATE_SELECTED_ANSWEAR } from "../types";

export const getQuestions = () => async dispatch => {
    await fetch(API_QUESTIONS_URL)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(item => {
                const newArray = [];
                item.all_answers = [...item.incorrect_answers, item.correct_answer];
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

export const updateCorrectAnswears = value => (dispatch, getState) => {
    return {
        type: UPDATE_CORRECT_ANSWEARS,
        payload: getState().appStore.correctAnswers.push(value)
    }
}

export const updateSelectedAnswear = value => {
    console.log('value', value)
    return {
        type: UPDATE_SELECTED_ANSWEAR,
        payload: value
    }
}
