
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
       
        <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
            <div onClick={() => selectAnswer(answer)} className={"answer " + "answer--" + answer.class}>
                {answer.name}
            </div>
        </div>
    )
}

export default QuizAnswerComponent;