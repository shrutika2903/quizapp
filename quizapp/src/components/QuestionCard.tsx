import React, {useState} from "react";
import { AnswerObject } from '../App';
import { Wrapper, ButtonWrapper} from './QuestionCard.styles';


type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject;
    questionNr: number;
    totalQuestions: number

}


const QuestionCard:React.FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => (
    <div>
        <p className="number">
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}}/>
        {
            answers.map((answer) => (
                <div key={answer}>
                    <button disabled={userAnswer ? true : false} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}}></span>
                    </button>
                    </div>
            ))
        }
    </div>
    

)

export default QuestionCard;