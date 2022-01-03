
const QuizAnswerComponent = props => {

    const {answer} = props;

    return (
        <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
            <div onClick={() => props.onSelectAnswer(answer.name)} className={"answer " + "answer--" + answer.class}>
                {answer.name}
            </div>
        </div>
    )
}

export default QuizAnswerComponent;