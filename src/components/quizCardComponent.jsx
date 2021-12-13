import '../css/quizCard.css';
import QuizAnswerComponent from './quizAnswerComponent';
import { useSelector } from 'react-redux';
import { selectCorrectAnswers, selectSelectedAnswer } from '../selectors/app';

const QuizCardComponent = props => {

    const correctAnswers = useSelector(state => selectCorrectAnswers(state));
    const selectedAnswer = useSelector(state => selectSelectedAnswer(state));


    const {question, allQuestions, indexQuestion} = props;

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-10 col-lg-10">
                    <div className="border">
                        <div className="question bg-white p-3 border-bottom">
                            <div className="d-flex flex-row justify-content-between align-items-center mcq">
                                <h4>MCQ Quiz</h4><span>({correctAnswers.length})</span>
                            </div>
                        </div>
                        <div className="question bg-white p-3 border-bottom">
                            <div className="d-flex flex-row align-items-center question-title">
                                <h3 className="text-danger">Q.</h3>
                                <h5 className="mt-1 ml-2">{question.question}</h5>
                            </div>
                            {(question.all_answers || []).map((item, index) => 
                            <div className="ans ml-2" key={index}>
                                <QuizAnswerComponent 
                                    answer={item} 
                                    question={question}
                                />
                            </div>
                            )}
                        </div>
                        <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                            {Object.keys(selectedAnswer).length > 0 ? 
                            <button className="btn btn-primary border-success align-items-center btn-success" 
                                type="button" 
                                onClick={() => props.onChangeQuestion()}
                                >{allQuestions.length - 1 === indexQuestion ? 'Finish' : 'Next'}
                                <i className="fa fa-angle-right ml-2"></i>
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