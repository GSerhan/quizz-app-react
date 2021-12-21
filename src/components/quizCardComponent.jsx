import '../css/quizCard.css';
import QuizAnswerComponent from './quizAnswerComponent';
import { useSelector } from 'react-redux';
import { selectCorrectAnswers, selectSelectedAnswer } from '../selectors/app';


const QuizCardComponent = props => {
    const {question, allQuestions, indexQuestion} = props;
    const correctAnswers = useSelector(state => selectCorrectAnswers(state));
    const selectedAnswer = useSelector(state => selectSelectedAnswer(state));

    const onSelectAnswerChild = (value) => props.onSelectAnswer(value)
    
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-10 col-lg-10">
                    <div className="container mt-sm-5 my-1">
                        <div className="p-3 border-bottom">
                            <div className="d-flex flex-row justify-content-between align-items-center mcq">
                                <h4>MCQ Quiz</h4><span>({correctAnswers.length + '/' + allQuestions.length})</span>
                            </div>
                        </div>
                        <div className="p-3 border-bottom">
                            <div className="question d-flex align-items-center ml-sm-5 pl-sm-5 pt-2">
                                <h5 className="py-2 h5" dangerouslySetInnerHTML={{__html: question.question}}/>
                            </div>
                            {(question.all_answers || []).map((item, index) => 
                            <div key={index}>
                                <QuizAnswerComponent 
                                    answer={item} 
                                    onSelectAnswer={onSelectAnswerChild}
                                />
                            </div>
                            )}
                        </div>
                        <div className="d-flex align-items-center pt-3">
                            {Object.keys(selectedAnswer).length > 0 ? 
                            <button className="btn btn-success" 
                                onClick={() => props.onChangeQuestion()}
                                >{allQuestions.length - 1 === indexQuestion ? 'Finish' : 'Next'}
                            </button>
                            : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizCardComponent;