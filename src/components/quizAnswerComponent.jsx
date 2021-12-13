
import { useDispatch, useSelector } from 'react-redux';
import { updateCorrectAnswers, updateSelectedAnswer } from '../actions/app'
import { selectSelectedAnswer } from '../selectors/app';


const QuizAnswerComponent = props => {

    const {answer} = props;
    
    const dispatch = useDispatch();
    const selectedAnswer = useSelector(state => selectSelectedAnswer(state));

    const selectAnswer = (value) => {
        if(Object.keys(selectedAnswer).length > 0) return
        if(value.name === props.question.correct_answer) {
            answer.class = 'success';
            dispatch(updateCorrectAnswers(props.question))
        } else {
            answer.class = 'error';
        }
        dispatch(updateSelectedAnswer(value));
    }
    return (
        <div onClick={() => selectAnswer(answer)}>
            <span className={answer.class}>{answer.name}</span>
        </div>  
    )
}

export default QuizAnswerComponent;