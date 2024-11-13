"use client"

import { useEffect, useState } from "react";
import { CustomButton } from "./CustomButton";

type Option = {
  id: string;
  text: string;
};

type QuestionType = {
  id: number;
  question: string;
  options: Option[];
  correctAnswer: string;
  explanation: string;
};

type QuizProps = {
  questions: QuestionType[];
};

export const Quiz = ({ questions }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  
  const handleNext = () => {
    if (currentQuestion + 1 > questions.length) {
        handleFinish();
        return
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  
  const handleFinish = () => {
    setTotalScore(((score / questions.length) * 100))
    setFinished(true);
    console.log("Finish");
  };


  return (
    <div className="w-full flex flex-col items-center p-5">
        {finished?
            <FinishScreen score={totalScore.toFixed(0)} />
            :
            <Question question={questions[currentQuestion]} handleNext={handleNext} numQ={questions.length} score={score} setScore={setScore}/>
        }
    </div>
  );
};

const FinishScreen = ({score}:{score:string}) => {
    return (
    <div className="w-full flex flex-col items-center justify-center p-5">
        <h1 className="text-2xl font-bold">DIN SCORE: {score} %</h1>
    </div>
    )
}


const Question = ({ question, handleNext, numQ, score, setScore }: {question:QuestionType, handleNext:() => void, numQ:number, score:number, setScore:(value: number) => void}) => {

    const [disabled, setDisabled] = useState(true)
    

  return (
    <div className="w-full flex flex-col items-center space-y-4" key={question.id}>
        <div className="flex items-center justify-between w-full">
            <h1 className="text-lg sm:text-2xl font-bold">{question.question}</h1>
            <p className="text-lg font-bold">Score: {score}</p>
        </div>
        <Options options={question.options} answer={question.correctAnswer} explanation={question.explanation} score={score} setScore={setScore} setDisabled={setDisabled}/>
        <div className="flex items-center justify-between w-full">
            <p className="text-lg font-bold">Spørsmål {question.id} / {numQ}</p>
            <CustomButton text="Neste spm" onClick={() => {
                handleNext();
                setDisabled(true);
            }} disabled={disabled}/>
                
        </div>
    </div>
  );
};

const Options = ({ options, answer, explanation, score, setScore, setDisabled }: 
    { options: Option[], answer: string, explanation: string, score:number, setScore:(value: number) => void, setDisabled:(value: boolean) => void }) => {
    const [selected, setSelected] = useState<string | undefined>(undefined);
    const [result, setResult] = useState<string | undefined>(undefined);
    const [showExplanation, setShowExplanation] = useState(false);
    

    const handleSelect = (answer:string) => {
        if (selected) {
            return
        }
        setSelected(answer);
        setDisabled(false);
    }

    const isCorrect = () => {
      return selected === answer;
    };
  
    useEffect(() => {
        if (selected) {
            if (isCorrect()) {
                setResult("Riktig!");
                setScore(score + 1)
                setShowExplanation(false); 
                } else {
                setResult("Feil!");
                setShowExplanation(true);
                }
        }
    }, [selected])
  
    return (
      <>
        {result? 
        <h1 className="text-lg font-bold">{result}</h1> : 
        <h1></h1>}
        <ul className="space-y-4 w-full">
          {options.map((option) => (
            <button
              className={`p-5 w-full flex items-center border-2 space-x-5 rounded-md hover:cursor-pointer 
                ${selected && `hover:cursor-not-allowed`}
                ${option.id === selected ? (isCorrect() ? 'border-green-500' : 'border-red-500') : 'border-purple-500'} 
                ${option.id === selected ? (isCorrect() ? 'bg-green-100' : 'bg-red-100') : 'bg-white'}`}
              key={option.id}
              onClick={() => handleSelect(option.id)}
              type="button"
            >
              <p className="font-extrabold">{option.id})</p>
              <p>{option.text}</p>
            </button>
          ))}
        </ul>
        {showExplanation && <p className="mt-4 text-red-500">{explanation}</p>}
      </>
    );
  };