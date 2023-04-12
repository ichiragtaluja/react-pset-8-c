import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

export function Answer() {
  const { answerId } = useParams();
  const { questionsAnswers } = useContext(DataContext);

  const selectedAnswer = questionsAnswers.find(
    ({ id }) => id === Number(answerId)
  );
  return (
    <>
      <h1>Answer</h1>
      {selectedAnswer.answer}
    </>
  );
}
