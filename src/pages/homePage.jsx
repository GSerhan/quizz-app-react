import QuizCardComponent from "../components/quizCardComponent"
import { getQuestions, updateSelectedQuestionIndex, updateSelectedAnswer, updateFinishModal, restartQuiz, updateCorrectAnswers } from '../actions/app'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedQuestion, selectSelectedQuestionIndex, selectAllQuestions, selectFinishModal, selectCorrectAnswers, selectSelectedAnswer } from '../selectors/app';
import QuizFinishModalComponent from "../components/quizFinishModalComponent";

const HomePage = _ => {

    const dispatch = useDispatch();
    const selectedQuestion = useSelector(state => selectSelectedQuestion(state));
    const selectedQuestionIndex = useSelector(state => selectSelectedQuestionIndex(state));
    const allQuestions = useSelector(state => selectAllQuestions(state));
    const finishModal = useSelector(state => selectFinishModal(state));
    const correctQuestions = useSelector(state => selectCorrectAnswers(state));
    const selectedAnswer = useSelector(state => selectSelectedAnswer(state));

    const handleSelectedQuestion = () => {
      if(selectedQuestionIndex === allQuestions.length - 1) {
        dispatch(updateFinishModal(true));
      } else {
        dispatch(updateSelectedQuestionIndex(selectedQuestionIndex + 1))
      }
      dispatch(updateSelectedAnswer({}));
    }

    const handleRestartQuiz = () => {
      dispatch(getQuestions());
      dispatch(restartQuiz());
    }
    
    const handleSelectAnswer = (value) => {
      const selectedAnswerLocal = selectedQuestion.all_answers.find(item => item.name === value);
      dispatch(updateSelectedAnswer(selectedAnswerLocal));
      if(Object.keys(selectedAnswer).length) return;
      if(selectedAnswerLocal.name === selectedQuestion.correct_answer) {
        selectedAnswerLocal.class = 'success';
        dispatch(updateCorrectAnswers(selectedQuestion))
      } else {
        selectedAnswerLocal.class = 'error';
      }
      dispatch(updateSelectedAnswer(selectedAnswerLocal));
    }

    useEffect(() => {
       dispatch(getQuestions())
    }, [dispatch])

    return (
      <div>
        {allQuestions.length ? 
        <QuizCardComponent
          question={selectedQuestion}
          indexQuestion={selectedQuestionIndex}
          allQuestions={allQuestions}
          onChangeQuestion = {handleSelectedQuestion}
          onSelectAnswer = {handleSelectAnswer}
       />: ''}
       {finishModal && 
       <QuizFinishModalComponent 
          correctQuestionsCount={correctQuestions.length} 
          allQuestionsCount={allQuestions.length}
          onRestartQuiz={handleRestartQuiz}
       />}
      </div>
    )
}

export default HomePage