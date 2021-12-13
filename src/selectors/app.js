export const selectSelectedQuestion = state => {
    if(!state.appStore.questions.length) return [];
    return state.appStore.questions.find((item, index) => index === state.appStore.selectedQuestionIndex);
}

export const selectSelectedQuestionIndex = state => {
    return state.appStore.selectedQuestionIndex;
}

export const selectAllQuestions = state => {
    return state.appStore.questions
}

export const selectCorrectAnswers = state => {
    return state.appStore.correctAnswers
}

export const selectSelectedAnswer = state => {
    return state.appStore.selectedAnswer
}


export const selectFinishModal = state => {
    return state.appStore.finishModal
}