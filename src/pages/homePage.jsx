import QuizCardComponent from "../components/quizCardComponent"
import { getQuestions, updateSelectedQuestionIndex, updateSelectedAnswer, updateFinishModal } from '../actions/app'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedQuestion, selectSelectedQuestionIndex, selectAllQuestions, selectFinishModal } from '../selectors/app';
import QuizFinishModalComponent from "../components/quizFinishModalComponent";

const HomePage = _ => {

    const dispatch = useDispatch();
    const selectedQuestion = useSelector(state => selectSelectedQuestion(state));
    const selectedQuestionIndex = useSelector(state => selectSelectedQuestionIndex(state));
    const allQuestions = useSelector(state => selectAllQuestions(state));
    const finishModal = useSelector(state => selectFinishModal(state));

    const handleSelectedQuestion = () => {
      if(selectedQuestionIndex === allQuestions.length - 1) {
        dispatch(updateFinishModal(true));
      } else {
        dispatch(updateSelectedQuestionIndex(selectedQuestionIndex + 1))
        dispatch(updateSelectedAnswer(''));
      }
    }

    useEffect(() => {
       dispatch(getQuestions())
    }, [dispatch])

    return (
      <div>
        {allQuestions.length ? <QuizCardComponent
          question={selectedQuestion}
          indexQuestion={selectedQuestionIndex}
          allQuestions={allQuestions}
          onChangeQuestion = {handleSelectedQuestion}
       />: ''}
       {finishModal && <QuizFinishModalComponent/>}
      </div>
    )
}

export default HomePage