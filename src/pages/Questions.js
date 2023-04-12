import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";

export function Questions() {
  const { questionsAnswers } = useContext(DataContext);
  return (
    <>
      <h1>Questions</h1>
      {questionsAnswers.map((questionAnswer) => {
        const { id, question, answer } = questionAnswer;
        return (
          <div>
            <p>{question}</p>
            <Link>upvote</Link> <Link>downvote</Link>{" "}
            <NavLink to={`/answer/${id}`}>Answer</NavLink>
          </div>
        );
      })}
    </>
  );
}
