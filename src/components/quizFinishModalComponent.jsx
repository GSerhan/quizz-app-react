import '../css/quizOverlay.css';

const QuizFinishModalComponent = props => {

    const {correctQuestionsCount, allQuestionsCount} = props;

    return (
        <div className="modal-quiz">
            <div className="overlay"></div>
            <div className="modal-quiz__container">
                <div className="modal-quiz__header">
                    <h2>Congratulations!</h2>
                </div>
                <div className="modal-quiz__body">
                    <p>You have completed the quiz.</p>
                    <p>You got: <strong>{correctQuestionsCount}</strong> out of <strong>{allQuestionsCount}</strong> questions right.</p>
                </div>
                <div>
                    <button className='btn'>Restart</button>
                </div>
            </div>
        </div>
    )

}

export default QuizFinishModalComponent;
