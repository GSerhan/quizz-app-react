import QuizCardComponent from "../components/quizCardComponent"
import { getQuestions, updateSelectedQuestionIndex, updateSelectedAnswear } from '../actions/app'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedQuestion, setSelectedQuestionIndex, selectAllQuestions } from '../selectors/app';

const HomePage = _ => {

    const dispatch = useDispatch();
    const selectedQuestion = useSelector(state => setSelectedQuestion(state));
    const selectedQuestionIndex = useSelector(state => setSelectedQuestionIndex(state));
    const allQuestions = useSelector(state => selectAllQuestions(state));

    const handleSelectedQuestion = () => {
      dispatch(updateSelectedQuestionIndex(selectedQuestionIndex + 1))
      dispatch(updateSelectedAnswear(''));
    }

    useEffect(() => {
       dispatch(getQuestions())
    }, [dispatch])

    return (
      <div>
        {allQuestions.length && <QuizCardComponent
          question={selectedQuestion}
          onChangeQuestion = {handleSelectedQuestion}
       />}
       </div>
    )
}

export default HomePage