
import { useDispatch, useSelector } from 'react-redux';
import { updateCorrectAnswears, updateSelectedAnswear } from '../actions/app'
import { selectSelectedAnswear } from '../selectors/app';


const QuizAnswerComponent = props => {
    
    const dispatch = useDispatch();
    const selectedAnswear = useSelector(state => selectSelectedAnswear(state));

    const selectAnswear = (value) => {
        if(Object.keys(selectedAnswear).length > 0) return
        if(value.name === props.question.correct_answer) {
            props.item.class = 'success';
            dispatch(updateCorrectAnswears(props.question))
        } else {
            props.item.class = 'error';
        }
        dispatch(updateSelectedAnswear(value));
    }
    return (
        <div onClick={() => selectAnswear(props.item)}>
            <span className={props.item.class}>{props.item.name}</span>
        </div>  
    )
}

export default QuizAnswerComponent;